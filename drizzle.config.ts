import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default {
  connectionString:
    `mysql://` +
    `${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}` +
    `@` +
    `${process.env.DATABASE_HOST}` +
    `?ssl={"rejectUnauthorized":true}`,
  out: "./drizzle",
  schema: "./src/db/schema.ts",
} satisfies Config;
