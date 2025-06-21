import type { NextApiRequest, NextApiResponse } from 'next';
import { getBuilds } from '../lib/builds';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const builds = await getBuilds();
      if (!Array.isArray(builds)) {
        console.error("getBuilds did not return an array:", builds);
        return res.status(500).json({ message: "Internal Server Error: builds not array" });
      }
      res.status(200).json(builds);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error("Error in /api/builds handler:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
