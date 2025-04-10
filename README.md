# 🧠 Prompter

[![Next.js](https://img.shields.io/badge/Next.js-15-blue.svg?logo=next.js)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-informational?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Project Overview

**Prompter** is a full-stack prompt management application built as part of a developer assignment. It allows users to:

- 📝 Create, edit, and delete writing prompts
- ⭐ Mark prompts as favorite
- 🎨 Enjoy a clean, accessible UI with powerful developer tooling

This app uses the **Next.js 15 App Router**, with a PostgreSQL database and Prisma ORM, and is fully Dockerized for local development or deployment.

---

## 🚀 Features

- ✅ Prompt creation, editing, deletion
- ✅ Favorite/unfavorite functionality
- ✅ Responsive UI with `shadcn/ui` (Radix + Tailwind)
- ✅ Form validation using `zod`
- ✅ Toast notifications with `sonner`
- ✅ Prisma + PostgreSQL database
- ✅ Docker-ready setup
- ✅ ESLint and TypeScript for high-quality code

---

## 🧰 Tech Stack

| Tool            | Description                               |
|------------------|-------------------------------------------|
| **Next.js 15**   | React framework for full-stack apps       |
| **Prisma**       | Type-safe database ORM                    |
| **PostgreSQL**   | Open source relational database           |
| **Tailwind CSS** | Utility-first styling                     |
| **shadcn/ui**    | Styled Radix components                   |
| **Sonner**       | Toast notifications                       |
| **Zod**          | Form validation and type inference        |
| **Docker**       | Containerization for full dev environment |
| **TypeScript**   | Strongly typed JavaScript                 |

---

## 📦 Getting Started

### ▶️ Local Development

1. **Clone the repo**

```bash
git clone https://github.com/yourname/prompter.git
cd prompter
pnpm install
# or
npm install
```
### Create a .env file
```bash
DATABASE_URL=
```

### Run Prisma DB migration
```bash
npx prisma migrate dev --name init
```
### Start the dev server
```bash
pnpm run dev 
#or 
npm run dev
```
## 🐳 Docker Setup
### Requires Docker and Docker Compose installed.

### 1. Add .env file:
```bash
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=prompter
DATABASE_URL=postgresql://postgres:postgres@db:5432/prompter
```
### 2. Run everything in Docker:
```bash
docker compose up --build
```
### 3. Access the app:
```bash
Visit: http://localhost:3000
```

## 📁 Project Structure

app/
├── actions/            → Server actions (CRUD logic)
├── components/         → UI elements & custom components
├── lib/                → DB client, helpers
├── prisma/             → Prisma schema & migrations
├── public/             → Static files
├── styles/             → Tailwind CSS config

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


