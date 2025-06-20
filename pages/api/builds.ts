// pages/api/builds.ts
export default function handler(req, res) {
  const builds = [
    {
      id: 1,
      status: "Success",
      triggeredBy: "push",
      timestamp: "2025-06-18T12:00:00Z",
      duration: "35s",
    },
    {
      id: 2,
      status: "Running",
      triggeredBy: "manual",
      timestamp: "2025-06-19T09:15:00Z",
      duration: "In Progress",
    },
    {
      id: 3,
      status: "Failed",
      triggeredBy: "webhook",
      timestamp: "2025-06-19T10:00:00Z",
      duration: "50s",
    },
  ];
  res.status(200).json(builds);
}
