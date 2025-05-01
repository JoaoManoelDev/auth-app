import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  REFRESH_JWT_SECRET: z.string(),
  REFRESH_JWT_EXPIRES_IN: z.string(),
});

export type Env = z.infer<typeof envSchema>;
