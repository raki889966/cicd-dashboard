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
      .then(data => {
        if (Array.isArray(data)) {
          setBuilds(data);
        } else {
          console.error("API returned non-array data:", data);
          setBuilds([]);
        }
      })
      .catch(err => {
        console.error("Failed to fetch builds", err);
        setBuilds([]);
      });
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
          {builds.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: '1rem' }}>
                No builds to display
              </td>
            </tr>
          ) : (
            builds.map(build => (
              <tr key={build.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{build.id}</td>
                <td
                  style={{
                    color:
                      build.status === 'success'
                        ? 'green'
                        : build.status === 'failure'
                        ? 'red'
                        : 'orange',
                  }}
                >
                  {build.status}
                </td>
                <td>{build.triggeredBy}</td>
                <td>{new Date(build.timestamp).toLocaleString()}</td>
                <td>{build.duration}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
