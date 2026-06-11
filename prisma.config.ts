import path from "node:path";
import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Load .env so DATABASE_URL is available when prisma CLI loads this config
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
