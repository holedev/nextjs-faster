"use server";

import { revalidateTag, unstable_cache } from "next/cache";
import { prisma } from "@/configs/prisma/db";
import { handleErrorServerWithAuth } from "@/utils/handle-error-server";

const getProfile = async () =>
  handleErrorServerWithAuth({
    cb: ({ user }) =>
      unstable_cache(
        async () => {
          const nickname = await prisma.nickname.findUnique({
            where: {
              authorId: user?.id
            }
          });

          return {
            ...user,
            nickname: nickname?.content
          };
        },
        ["profile", user?.id ?? ""],
        { tags: [`profile::${user?.id}`] }
      )()
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

      revalidateTag("nicknames");
      revalidateTag(`profile::${user.id}`);
      return updatedNickname;
    }
  });

export { getProfile, updateNickname };
