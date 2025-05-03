import { z } from "zod";

const envSchema = z.object({
  SESSION_SECRET_KEY: z.string(),
  SERVER_API: z.string().url(),
});

const parseEnv = envSchema.safeParse(process.env);

if (!parseEnv.success) {
  console.error(
    "Invalid environment variables.",
    parseEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid environment variables.");
}

export const env = parseEnv.data;
