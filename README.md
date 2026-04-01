# 🗂️ Task Manager App (Full Stack)

![Node.js](https://img.shields.io/badge/Node.js-green)
![Express.js](https://img.shields.io/badge/Express.js-black)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue)
![MySQL](https://img.shields.io/badge/MySQL-database-orange)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-cyan)
![JWT](https://img.shields.io/badge/Auth-JWT-yellow)

A full-stack **Task Management Application** built with modern technologies:

* ⚛️ **Frontend**: React 19 + TypeScript + Vite + Tailwind + Redux Toolkit  
* 🚀 **Backend**: Node.js + Express + Prisma + MySQL  
* 🔐 Authentication using JWT  
* 📦 Clean architecture with scalable structure  

---

## 🚀 Project Overview

This project demonstrates a **production-style full-stack setup** including:

* Authentication system (JWT-based)
* Scalable frontend architecture (Redux Toolkit + RTK Query)
* Backend API with Prisma ORM and MySQL
* Form validation using Zod
* Modern UI using Tailwind + shadcn/ui

---

## 📁 Project Structure

```bash
task-manager-app/
│
├── task-manager-frontend/   # React + Vite + TypeScript
├── task-manager-backend/    # Node + Express + Prisma
│
└── README.md
⚛️ Frontend Setup
🛠 Tech Stack
React 19 + TypeScript
Vite
Tailwind CSS
Redux Toolkit + RTK Query
React Router DOM
Axios
Zod
shadcn/ui
lucide-react (icons)
⚙️ Installation & Setup
1. Create Project
npm create vite@latest task-manager-frontend -- --template react-ts
cd task-manager-frontend
npm install
2. Install Tailwind
npm install tailwindcss @tailwindcss/vite
Update vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
Update src/index.css
@import "tailwindcss";
3. Install Dependencies
npm install react-router-dom
npm install lucide-react
npm install @reduxjs/toolkit react-redux redux-persist
npm install axios
npm install react-hook-form @hookform/resolvers zod
4. Setup shadcn/ui
Add path alias

tsconfig.json

"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}

tsconfig.app.json

"compilerOptions": {
  "paths": {
    "@/*": ["./src/*"]
  }
}
npx shadcn@latest init
5. Run Frontend
npm run dev
📌 Frontend Architecture Highlights
Redux Store → src/_redux/store.ts
Typed Hooks → src/_redux/hooks.ts
API Layer → src/_api/index.ts
Auth Slice → src/pages/auth/slice/index.tsx
🚀 Backend Setup
🛠 Tech Stack
Node.js + Express
TypeScript
Prisma ORM
MySQL
JWT Authentication
Zod (validation)
⚙️ Installation & Setup
1. Initialize Project
npm init -y
2. Install Dependencies
npm install express cors cookie-parser bcrypt jsonwebtoken dotenv
npm install prisma --save-dev
npm install @prisma/client @prisma/adapter-mariadb
npm install zod http-status-codes
npm install -D typescript tsx @types/node @types/express @types/cors @types/cookie-parser @types/bcrypt @types/jsonwebtoken
3. Setup TypeScript
npx tsc --init

Update tsconfig.json:

{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2023",
    "strict": true,
    "esModuleInterop": true
  }
}
4. Prisma Setup
npx prisma init --datasource-provider mysql --output ../generated/prisma
5. Environment Variables

Create .env:

DATABASE_URL="mysql://root:password@localhost:3306/task_manager"
PORT=3000
JWT_SECRET=supersecretjwtkey
6. Run Migration
npx prisma migrate dev --name init
npx prisma generate
7. Run Backend
npm run dev
📌 Backend Features
Prisma Client for type-safe queries
MySQL integration
JWT-based authentication
Middleware (CORS, cookies, JSON parsing)
Scalable API structure
🔐 Authentication Flow
User logs in via frontend
Backend validates credentials
JWT token is generated
Token stored (cookies/localStorage)
Protected routes verified
User accesses dashboard
▶️ Running Full Project
Start Backend
cd task-manager-backend
npm run dev
Start Frontend
cd task-manager-frontend
npm run dev
📈 Future Improvements
Task CRUD APIs
Role-based access control
Refresh tokens
Docker setup
CI/CD pipeline
🎯 Key Learning Outcomes
Full-stack architecture design
State management with Redux Toolkit
API handling with RTK Query
Authentication flow (JWT)
Database handling with Prisma
Clean and scalable structure
📄 License

This project is open-source and free to use for learning purposes.

🙌 Author

Sharad Gupta
