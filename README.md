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
* 🔐 Authentication using JWT (HttpOnly Cookies)
* 📦 Clean architecture with scalable structure

---

## 🚀 Project Overview

This project demonstrates a **production-style full-stack setup** including:

* Secure authentication system (JWT + HttpOnly cookies)
* Scalable frontend architecture using Redux Toolkit + RTK Query
* Backend API built with Express and Prisma ORM
* Form validation using Zod
* Modern UI using Tailwind CSS and shadcn/ui

---

## 🛠 Tech Stack

### ⚛️ Frontend

* React 19 + TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* React Router DOM
* Redux Toolkit + RTK Query
* Axios
* React Hook Form
* Zod
* lucide-react

---

### 🚀 Backend

* Node.js
* Express.js
* Prisma ORM
* MySQL
* JWT (HttpOnly Cookies)
* bcrypt
* Zod
* cookie-parser
* CORS
* dotenv

---

### ⚙️ Development & Tooling

* TypeScript
* tsx
* Prisma CLI
* ES Modules (ESM)

---

## 📁 Project Structure

```bash
task-manager-app/
│
├── task-manager-frontend/   # React + Vite + TypeScript
├── task-manager-backend/    # Node + Express + Prisma
│
└── README.md
```

---

# ⚛️ Frontend Setup

## ⚙️ Installation & Setup

### 1. Create Project

```bash
npm create vite@latest task-manager-frontend -- --template react-ts
cd task-manager-frontend
npm install
```

---

### 2. Install Dependencies

```bash
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
npm install lucide-react
npm install @reduxjs/toolkit react-redux redux-persist
npm install axios
npm install react-hook-form @hookform/resolvers zod
```

---

### 3. Setup Tailwind

**vite.config.ts**

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**src/index.css**

```css
@import "tailwindcss";
```

---

### 4. Setup shadcn/ui

**tsconfig.json**

```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}
```

```bash
npx shadcn@latest init
```

---

### 5. Run Frontend

```bash
npm run dev
```

---

## 📌 Frontend Architecture Highlights

* Redux Store → `src/_redux/store.ts`
* Typed Hooks → `src/_redux/hooks.ts`
* API Layer → `src/_api/index.ts`
* Auth Slice → `src/pages/auth/slice/index.tsx`

---

# 🚀 Backend Setup

## ⚙️ Installation & Setup

### 1. Initialize Project

```bash
npm init -y
```

---

### 2. Install Dependencies

```bash
npm install express cors cookie-parser bcrypt jsonwebtoken dotenv
npm install prisma --save-dev
npm install @prisma/client @prisma/adapter-mariadb
npm install zod http-status-codes
npm install -D typescript tsx @types/node @types/express @types/cors @types/cookie-parser @types/bcrypt @types/jsonwebtoken
```

---

### 3. Setup TypeScript

```bash
npx tsc --init
```

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2023",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

### 4. Prisma Setup

```bash
npx prisma init --datasource-provider mysql --output ../generated/prisma
```

---

### 5. Environment Variables

Create `.env`:

```env
DATABASE_URL="mysql://root:password@localhost:3306/task_manager"
PORT=3000
JWT_SECRET=supersecretjwtkey
```

---

### 6. Run Migration

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

### 7. Run Backend

```bash
npm run dev
```

---

## 📌 Backend Features

* Prisma Client for type-safe queries
* MySQL integration
* JWT authentication with HttpOnly cookies
* Middleware (CORS, cookies, JSON parsing)
* Scalable API structure

---

## 🔐 Authentication Flow

1. User logs in via frontend
2. Backend validates credentials
3. JWT token is generated
4. Token stored in HttpOnly cookie
5. Protected routes verified
6. User accesses dashboard

---

## ▶️ Running Full Project

### Start Backend

```bash
cd task-manager-backend
npm run dev
```

### Start Frontend

```bash
cd task-manager-frontend
npm run dev
```

---

## 📈 Future Improvements

* Task CRUD APIs
* Role-based access control
* Refresh tokens
* Docker setup
* CI/CD pipeline

---

## 🎯 Key Learning Outcomes

* Full-stack architecture design
* State management with Redux Toolkit
* API handling with RTK Query
* Authentication flow (JWT + cookies)
* Database handling with Prisma
* Clean and scalable structure

---

## 📄 License

This project is open-source and free to use for learning purposes.

---

## 🙌 Author

Sharad Gupta
