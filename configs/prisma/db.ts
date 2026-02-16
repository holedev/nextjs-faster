import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const prismaClientSingleton = () => {
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
};

const prismaGlobal = globalThis as unknown as {
  prisma: ReturnType<typeof prismaClientSingleton>;
};

const prisma = prismaGlobal.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

export { prisma };
