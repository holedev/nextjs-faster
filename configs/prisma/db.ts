import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: copy config from prisma
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export { prisma };

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
