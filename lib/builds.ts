import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

// Save build to Redis
export async function saveBuild(build: any) {
  await redis.lpush("builds", JSON.stringify(build));
}

// Get builds from Redis
export async function getBuilds() {
  const results = await redis.lrange("builds", 0, 50); // Get last 50 builds
  return results.map((item) => JSON.parse(item));
}
