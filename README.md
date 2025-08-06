# Next.js Auth Dashboard

A small Next.js App Router project with a simple authentication flow and dashboard.

## Features

- Phone number login (Iranian mobile numbers: `09XXXXXXXXX`)
- Fetch random user data from `randomuser.me` API
- Persistent auth state with Jotai (`atomWithStorage`)
- Form validation with React Hook Form + Zod
- Reusable `<Input>` and `<Button>` components
- Protected `/dashboard` route via `AuthGuard`

## Tech Stack

- Next.js (App Router) + TypeScript
- SCSS Modules & global styles (`globals.scss`)
- Jotai for state management
- React Hook Form + Zod for form handling & validation
- Native `fetch` for API calls

## Prerequisites

- Node.js v18+
- pnpm, npm, or yarn
- Docker (optional)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/masih-js/auth-page-and-dashboard-frontend.git
cd auth-page-and-dashboard-frontend
```

### 2. Environment Variables

Create a `.env.local` file in the project root:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://randomuser.me/api/?results=1&nat=us
```

## Running with Docker

1. **Build the Docker image**

   ```bash
   docker build -t nextjs-auth-dashboard .
   ```

2. **Run the container**

   ```bash
   docker run -d -p 3000:3000 --name auth-dashboard nextjs-auth-dashboard
   ```

3. **Open in your browser**

   Navigate to [http://localhost:3000/auth](http://localhost:3000/auth)

## Running Locally (without Docker)

1. **Install dependencies**

   ```bash
   pnpm install   # or yarn install / npm install
   ```

2. **Run in development mode**

   ```bash
   pnpm dev       # or yarn dev / npm run dev
   ```

3. **Access the app**

   Open [http://localhost:3000/auth](http://localhost:3000/auth) in your browser.
