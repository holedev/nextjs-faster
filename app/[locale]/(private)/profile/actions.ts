"use server";

import { cacheTag, revalidateTag, updateTag } from "next/cache";
import { prisma } from "@/configs/prisma/db";
import { _CACHE_NICKNAMES, _CACHE_PROFILE } from "@/constants/cache";
import { handleErrorServerWithAuth } from "@/utils/handle-error-server";

const getProfile = async () =>
  handleErrorServerWithAuth({
    cb: async ({ user }) => {
      "use cache";
      cacheTag(`${_CACHE_PROFILE}::${user?.id}`);

      const nickname = await prisma.nickname.findUnique({
        where: {
          authorId: user?.id
        }
      });

      return {
        ...user,
        nickname: nickname?.content
      };
    }
  });

const updateNickname = async (nickname: string) =>
  handleErrorServerWithAuth({
    cb: async ({ user }) => {
      if (!user) {
        throw new Error("User Not Found!");
      }

      const existingNickname = await prisma.nickname.findFirst({
        where: { content: nickname }
      });

      if (existingNickname) {
        throw new Error("Nickname already exists!");
      }

      const updatedNickname = await prisma.nickname.upsert({
        where: {
          authorId: user.id
        },
        update: {
          content: nickname
        },
        create: {
          content: nickname,
          authorId: user.id
        }
      });

      updateTag(_CACHE_NICKNAMES);
      updateTag(`${_CACHE_PROFILE}::${user.id}`);
      return updatedNickname;
    }
  });

export { getProfile, updateNickname };
