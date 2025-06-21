import type { NextApiRequest, NextApiResponse } from 'next';
import { saveBuild } from '../../../lib/builds';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const payload = req.body;
    const build = {
      id: payload.workflow_run?.id || Date.now(),
      status: payload.workflow_run?.conclusion || 'unknown',
      triggeredBy: payload.sender?.login || 'unknown',
      timestamp: payload.workflow_run?.created_at || new Date().toISOString(),
      duration: 'unknown',  // Could compute duration if you want
    };

    saveBuild(build);
    res.status(200).json({ message: 'Build saved' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
