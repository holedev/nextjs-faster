"use server";

import { cacheTag, updateTag } from "next/cache";
import { prisma } from "@/configs/prisma/db";
import { _CACHE_NICKNAMES, _CACHE_PROFILE } from "@/constants/cache";
import { handleErrorServerWithAuth } from "@/utils/handle-error-server";

type ProfileType = {
  id: string;
  email?: string;
  fullName?: string;
  avatarUrl?: string;
  nickname?: string;
};

// Cached per user id only, so the cache entry survives token refreshes.
const getNicknameByUserId = async (userId: string) => {
  "use cache";
  cacheTag(`${_CACHE_PROFILE}::${userId}`);

  const nickname = await prisma.nickname.findUnique({
    where: { authorId: userId }
  });

  return nickname?.content;
};

const getProfile = async () =>
  handleErrorServerWithAuth({
    cb: async ({ claims }) => {
      if (!claims) {
        throw new Error("User Not Found!");
      }

      const profile: ProfileType = {
        id: claims.sub,
        email: claims.email,
        fullName: claims.user_metadata?.full_name,
        avatarUrl: claims.user_metadata?.avatar_url,
        nickname: await getNicknameByUserId(claims.sub)
      };

      return profile;
    }
  });

const updateNickname = async (nickname: string) =>
  handleErrorServerWithAuth({
    cb: async ({ claims }) => {
      if (!claims) {
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
          authorId: claims.sub
        },
        update: {
          content: nickname
        },
        create: {
          content: nickname,
          authorId: claims.sub
        }
      });

      updateTag(_CACHE_NICKNAMES);
      updateTag(`${_CACHE_PROFILE}::${claims.sub}`);
      return updatedNickname;
    }
  });

export type { ProfileType };
export { getProfile, updateNickname };
