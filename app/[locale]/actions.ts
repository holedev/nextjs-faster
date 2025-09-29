"use server";

import { unstable_cache } from "next/cache";
import { prisma } from "@/configs/prisma/db";
import { handleErrorServerNoAuth } from "@/utils/handle-error-server";

const getAllNickname = async () =>
  handleErrorServerNoAuth({
    cb: unstable_cache(
      async () => {
        const nicknames = await prisma.nickname.findMany({
          select: {
            content: true,
            updatedAt: true
          }
        });

        return nicknames;
      },
      ["nicknames"],
      { tags: ["nicknames"] }
    )
  });

export { getAllNickname };
