import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.KV_REST_API_URL!,  // Or UPSTASH_REDIS_REST_URL, depending on your env var names
  token: process.env.KV_REST_API_TOKEN!,
});
