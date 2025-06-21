import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'builds.json');

export function getBuilds() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
}

export function saveBuild(build: any) {
  const builds = getBuilds();
  builds.unshift(build); // add new build to start
  fs.writeFileSync(filePath, JSON.stringify(builds, null, 2));
}
