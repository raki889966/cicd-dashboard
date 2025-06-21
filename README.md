# 🚀 CI/CD Dashboard

A real-time **CI/CD Build Dashboard** built with **Next.js (TypeScript)**, featuring:
- Mock API simulating build data
- GitHub Actions CI pipeline (type check, lint, build)
- Deployed on **Vercel**

## 🌟 Live Demo
👉 [View Dashboard](https://cicd-dashboard.vercel.app)

## 💻 Repo
👉 [GitHub](https://github.com/raki889966/cicd-dashboard)

## 🏷 Build Status
![CI](https://github.com/raki889966/cicd-dashboard/actions/workflows/ci.yml/badge.svg)

---

## ⚙️ Features

✅ Real-time build status table  
✅ Type-safe API (Next.js API routes + TypeScript)  
✅ GitHub Actions CI/CD pipeline  
✅ Easy deploy on Vercel  etc

---

## 📂 Project Structure
cicd-dashboard/
├── pages/
│ ├── index.tsx # Dashboard UI
│ └── api/
│ └── builds.ts # Mock builds API
├── .github/
│ └── workflows/
│ └── ci.yml # GitHub Actions workflow
├── package.json
└── tsconfig.json

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/raki889966/cicd-dashboard.git
cd cicd-dashboard
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Run locally
bash
Copy
Edit
npm run dev
Open http://localhost:3000

⚡ CI/CD Pipeline
✅ Type check: npx tsc --noEmit

✅ Lint check: npm run lint

✅ Build: npm run build

Configured via GitHub Actions in .github/workflows/ci.yml.

🌐 Deployment
This app is deployed on Vercel.
You can set up your own by connecting this repo at https://vercel.com/import.

✨ License
This project is licensed under the MIT License.

🙌 Acknowledgements
Next.js

GitHub Actions

Vercel

yaml
Copy
Edit

---

### ✅ **What to do next**
1️⃣ Create a `README.md` file in your project root:
```bash
New-Item README.md