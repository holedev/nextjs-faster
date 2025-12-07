"use server";

import { cacheTag } from "next/cache";
import { prisma } from "@/configs/prisma/db";
import { _CACHE_NICKNAMES } from "@/constants/cache";
import { handleErrorServerNoAuth } from "@/utils/handle-error-server";

const getAllNickname = async () =>
  handleErrorServerNoAuth({
    cb: async () => {
      "use cache";
      cacheTag(_CACHE_NICKNAMES);

      const nicknames = await prisma.nickname.findMany({
        select: {
          content: true,
          updatedAt: true
        }
      });

      return nicknames;
    }
  });

export { getAllNickname };
