# Summer Shop — Local Development Setup

## Prerequisites

- Node.js 18+ ([nodejs.org](https://nodejs.org))
- pnpm 9+ — install with: `npm install -g pnpm`

## Steps

### 1. Rename workspace file

```bash
cp pnpm-workspace.local.yaml pnpm-workspace.yaml
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the API server (Terminal 1)

```bash
pnpm --filter @workspace/api-server run dev:local
```

The API runs at **http://localhost:3001**

### 4. Start the frontend (Terminal 2)

```bash
pnpm --filter @workspace/summer-shop run dev
```

Open **http://localhost:5173** in your browser.

## Project Structure

```
├── artifacts/
│   ├── summer-shop/        # React + Vite frontend
│   │   ├── src/
│   │   │   ├── pages/      # All page components
│   │   │   ├── components/ # Navbar, Footer, ProductCard, etc.
│   │   │   └── data/       # products.json (32 products)
│   │   └── .env            # Frontend env vars
│   └── api-server/         # Express API server
│       ├── src/
│       │   ├── routes/     # API routes
│       │   └── middlewares/# Clerk auth middleware
│       └── .env            # Backend env vars
└── lib/
    ├── db/                 # Drizzle ORM + PostgreSQL
    └── api-zod/            # Zod validation schemas
```

## Environment Variables

### Frontend (`artifacts/summer-shop/.env`)
| Variable | Description |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (starts with `pk_test_`) |

### Backend (`artifacts/api-server/.env`)
| Variable | Description |
|---|---|
| `PORT` | Server port (default: 3001) |
| `DATABASE_URL` | PostgreSQL connection string |
| `CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key (starts with `sk_test_`) |

## Features

- 32 summer products across 8 categories
- Clerk authentication (Email/Password + Google)
- Protected product detail pages (login required)
- User profile page + update profile
- Search and category filtering
- Lottie animations on hero section
- Fully responsive (mobile + desktop)
