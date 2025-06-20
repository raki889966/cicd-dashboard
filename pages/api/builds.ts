import type { NextApiRequest, NextApiResponse } from 'next';
import { getBuilds } from '../../lib/builds';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const builds = await getBuilds();
      res.status(200).json(builds);
    } catch (err) {
      console.error("API /builds error:", err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
