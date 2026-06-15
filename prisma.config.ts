import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "configs/prisma/schema.prisma",
  datasource: {
    // Read tolerantly so `prisma generate` (run on postinstall, incl. CI without a DB)
    // doesn't throw on a missing var. `migrate`/`db push` still use the real value when set.
    url: process.env.DATABASE_URL ?? ""
  }
});
