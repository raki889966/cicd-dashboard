import { redis } from './redis';

export async function saveBuild(build: any) {
  await redis.lpush("builds", JSON.stringify(build));
}

export async function getBuilds() {
  try {
    const builds = await redis.lrange("builds", 0, -1);
    return builds.map((b: string) => {
      try {
        return JSON.parse(b);
      } catch (err) {
        console.error("Invalid JSON in Redis:", b, err);
        return null;
      }
    }).filter(b => b !== null);
  } catch (err) {
    console.error("Failed to get builds from Redis:", err);
    return [];
  }
}
