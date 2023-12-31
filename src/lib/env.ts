import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string(),
  NEXT_PUBLIC_STRAPI_REST_TOKEN: z.string(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_STRAPI_REST_TOKEN: process.env.NEXT_PUBLIC_STRAPI_REST_TOKEN,
});
