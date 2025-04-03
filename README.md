# 🚀 Next.js Starter Kit

A turbocharged starter kit for rapid development with Next.js 15, TypeScript, and Shadcn UI. Built for developers who want to move fast without compromising on quality.

## ⚡️ Instant Developer Experience

- **Zero Config Setup**
  - One-click setup with DevContainer, GitHub Codespaces, or Gitpod
  - Turbopack for lightning-fast HMR
  - Pre-configured development environment

- **Developer-First Workflow**
  - Automatic code formatting and linting on save
  - Git hooks enforce code quality
  - Conventional commits with automatic validation
  - Swagger UI for API documentation

- **Rapid Development Features**
  - Hot module replacement with Turbopack
  - Type-safe API routes with built-in validation
  - Auto-generated Swagger docs for APIs
  - Automated API testing setup

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with App Router
- **UI**: Shadcn UI (Accessible, customizable components)
- **Language**: TypeScript (Strict mode enabled)
- **Database**: Prisma (Type-safe ORM)
- **Auth**: Supabase (OAuth ready)
- **API**: REST with Swagger documentation
- **i18n**: next-intl (Type-safe translations)

## 🏃‍♂️ Quick Start

### 1. Cloud Development (Recommended)

Choose your preferred cloud development environment:

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/holedev/starter-kit)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=holedev/starter-kit)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/holedev/starter-kit)

This will:
- Clone the repository
- Set up the development environment
- Install dependencies
- Start the development server
- Configure all tools and extensions

### 2. Local Development (Alternative)

If you prefer local development:

1. **Clone & Install**
   ```bash
   git clone git@github.com:holedev/starter-kit.git
   cd starter-kit
   pnpm i
   ```

2. **Set Environment**
   ```bash
   cp .env.example .env
   ```

3. **Start Coding**
   ```bash
   pnpm dev
   ```

### 3. View API Documentation
```
http://localhost:3000/api-docs
```

## 💻 Developer Tools

### Command Center
```bash
pnpm dev         # Start dev server (Turbopack enabled)
pnpm build       # Production build
pnpm start       # Start production server
pnpm format:fix  # Fix code formatting
pnpm lint:fix    # Fix linting issues
```

### Git Workflow
```bash
git checkout -b feature/my-feature  # New feature branch
git add .                          # Stage changes
git commit                         # Commit (auto-formats + lints)
git push origin feature/my-feature # Push to remote
```

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── [locale]/       # i18n routes
│   ├── api/            # API endpoints
│   └── api-docs/       # Swagger UI
├── components/         # React components
│   ├── custom/        # Project components
│   └── ui/            # Shadcn UI components
└── configs/           # Configuration
    ├── data/         # Sample data
    ├── i18n/         # i18n config
    ├── messages/     # Translation files
    ├── prisma/       # Database schema
    ├── supabase/     # Auth config
    └── swagger/      # API documentation
```

## 🚦 API Development

1. Create your API route in `app/api/`
2. Add route schema in `configs/swagger/config.ts`
3. Auto-generated docs at `/api-docs`

Example API route with Swagger docs:
```typescript
// app/api/animals/random/route.ts
import { NextResponse } from "next/server";
import { animals } from "@/configs/data/animals";

export async function GET() {
  const random = Math.floor(Math.random() * animals.length);
  return NextResponse.json(animals[random]);
}
```

## 🎯 Best Practices

- **Code Quality**
  - TypeScript strict mode
  - ESLint + Prettier integration
  - Pre-commit hooks
  - Conventional commits

- **Performance**
  - Server Components by default
  - Automatic code splitting
  - Image optimization
  - Optimized builds

- **Security**
  - Environment variables
  - Type-safe database queries
  - Protected API routes
  - Auth middleware

## 🌐 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fholedev%2Fstarter-kit)

#### Important: Vercel Size Limits
Vercel has a size limit of 250MB for serverless functions. To avoid deployment issues:

1. **Configure Build Output**
   Add to your `next.config.ts`:
   ```typescript
   const config = {
     output: 'standalone',
     experimental: {
       serverMinification: true,
     },
   };
   ```

2. **Optimize Dependencies**
   - Use `dependencies` vs `devDependencies` correctly
   - Remove unused dependencies
   - Use dynamic imports for large libraries
   - Consider using CDN for large assets

3. **Monitor Build Size**
   ```bash
   pnpm build
   # Check .next/standalone size before deploying
   ```

4. **Alternative Deployment Options**
   If your app exceeds limits:
   - Use Docker deployment
   - Consider splitting into microservices
   - Use edge functions for API routes

### Docker
```bash
docker compose up
```

## 🤝 Contributing

1. Fork and clone
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

MIT License - fork, modify and use as you wish.

## 👨‍💻 Author

[@holedev](https://www.github.com/holedev)
