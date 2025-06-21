import type { NextApiRequest, NextApiResponse } from 'next';
import { getBuilds } from '../../lib/builds';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const builds = await getBuilds();
    res.status(200).json(builds);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
