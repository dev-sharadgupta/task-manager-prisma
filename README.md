🗂️ Task Manager App (Full Stack)

A production-ready full-stack Task Management Application built with modern technologies, featuring authentication, scalable architecture, and clean code practices.

🚀 Tech Stack
🖥️ Backend
Node.js
Express.js
Prisma ORM
MySQL
TypeScript
JWT Authentication
Zod Validation
🌐 Frontend
React 19 + TypeScript (Vite)
Tailwind CSS
Redux Toolkit + RTK Query
Axios
React Hook Form + Zod
shadcn/ui
📁 Project Structure
task-manager/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── generated/
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
⚙️ Backend Setup
1️⃣ Initialize Project
npm init -y
2️⃣ Install Dependencies
npm install typescript tsx @types/node --save-dev
npm install prisma --save-dev
npm install @prisma/client @prisma/adapter-mariadb dotenv
npm install express cors cookie-parser
npm install bcrypt jsonwebtoken
npm install zod http-status-codes
3️⃣ Setup TypeScript
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
4️⃣ Prisma Setup
npx prisma init --datasource-provider mysql --output ../generated/prisma
.env
DATABASE_URL="mysql://root:password@localhost:3306/task_manager"
PORT=3000
JWT_SECRET=supersecretjwtkey
5️⃣ Run Migration
npx prisma migrate dev --name init
npx prisma generate
6️⃣ Start Server
npm run dev
🌐 Frontend Setup
1️⃣ Create Project
npm create vite@latest task-manager-frontend -- --template react-ts
cd task-manager-frontend
npm install
2️⃣ Install Dependencies
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom@6
npm install lucide-react
npm install @reduxjs/toolkit react-redux redux-persist
npm install axios
npm install react-hook-form @hookform/resolvers zod
3️⃣ Setup Tailwind

vite.config.ts

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

index.css

@import "tailwindcss";
4️⃣ Setup shadcn/ui
npx shadcn@latest init

Optional components:

npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add sonner
5️⃣ Start Frontend
npm run dev
🔐 Features
✅ JWT Authentication (Login/Register)
✅ Secure Password Hashing (bcrypt)
✅ REST API with Express
✅ Prisma ORM with MySQL
✅ Global State with Redux Toolkit
✅ API Caching with RTK Query
✅ Form Validation using Zod
✅ Clean & Scalable Architecture
📡 API Structure (Example)
POST   /auth/register
POST   /auth/login
GET    /auth/me
🧠 Architecture Highlights
Modular folder structure
Separation of concerns
Prisma for type-safe DB queries
RTK Query for API caching
Axios base query abstraction
🛠️ Development Scripts
Backend
npm run dev
Frontend
npm run dev
📌 Future Improvements
Role-based authentication
Task CRUD features
Pagination & filtering
Docker setup
CI/CD pipeline
👨‍💻 Author

Sharad Gupta
