import { redis } from './redis';

export async function saveBuild(build: any) {
  // Save the build in Redis list
  await redis.lpush("builds", JSON.stringify(build));
}

export async function getBuilds() {
  // Get all builds from Redis list
  const builds = await redis.lrange("builds", 0, -1);
  return builds.map((b: string) => JSON.parse(b));
}
