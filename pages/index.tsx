import { useEffect, useState } from 'react';

type Build = {
  id: number;
  status: string;
  triggeredBy: string;
  timestamp: string;
  duration: string;
};

export default function Home() {
  const [builds, setBuilds] = useState<Build[]>([]);

  useEffect(() => {
    fetch('/api/builds')
      .then(res => res.json())
      .then(setBuilds);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 CI/CD Build Dashboard</h1>
      <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Triggered By</th>
            <th>Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {builds.map(build => (
            <tr key={build.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{build.id}</td>
              <td style={{ color: build.status === 'Success' ? 'green' : build.status === 'Failed' ? 'red' : 'orange' }}>
                {build.status}
              </td>
              <td>{build.triggeredBy}</td>
              <td>{new Date(build.timestamp).toLocaleString()}</td>
              <td>{build.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
