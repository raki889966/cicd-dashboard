import type { NextApiRequest, NextApiResponse } from 'next';
import { getBuilds } from '../../lib/builds';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const builds = getBuilds();
  res.status(200).json(builds);
}
