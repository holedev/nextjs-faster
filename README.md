# 🚀 Next Faster

Rapid development with Next.js 16, TypeScript, Shadcn UI, i18n, Prisma and Swagger — and an agent-ready workflow baked in. Built for developers who want to move fast without compromising on quality.

## 🛠 Tech Stack

### Frontend

- Next.js 16 (App Router)
- TypeScript 5
- TailwindCSS 4
- Shadcn UI
- next-intl (i18n)
- Swagger UI

### Backend & Database

- Next.js API Routes & Server Actions
- Prisma 7 ORM
- Supabase Auth & PostgreSQL

### Development Tools

- Dev Containers
- Biome / Ultracite (format & lint)
- Pre-commit hooks (Husky + lint-staged)
- Conventional Commits (commitlint)
- Semantic Release

## ✨ Features

- **Dev Containers**: Pre-configured development environment with [Development Container](https://containers.dev/).
- **Code Quality**: Pre-configured with [Biome](https://biomejs.dev/) via [Ultracite](https://www.ultracite.ai/), [commitlint](https://commitlint.js.org/) (follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)), and pre-commit hooks with [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged).
- **Common UI Components**: Shadcn UI components for rapid development — swap in another UI kit if you prefer.
- **Light/Dark Mode**: Theme switching based on user preference with next-themes.
- **Multi Language**: Internationalization (i18n) with next-intl. Ships with `en` and `vi` (default `vi`).
- **OAuth2**: Authentication with [Supabase](https://supabase.com/).
- **API Documentation**: Generated API docs with [Swagger UI](https://swagger.io/tools/swagger-ui/), served at `/api-docs`.
- **Auto Release**: Automated releases with [Semantic Release](https://semantic-release.gitbook.io/semantic-release/).
- **Vercel Deployment**: One-click deployment to [Vercel](https://vercel.com/).

## 🤖 AI-Assisted Development

This template is **agent-ready** — it ships with a curated set of agent skills and the documentation conventions they rely on.

- **`AGENTS.md`**: Entry point that points agents at the repo's skills and docs.
- **Agent skills** (`.claude/`, `.agents/`): Installed skills for grilling designs, triage, TDD, handoffs and more. `skills-lock.json` pins the installed set.
- **Domain docs convention** (`docs/agents/`): How agents consume the repo's language and decisions —
  - **`CONTEXT.md`** (repo root): a glossary of project-specific conventions (route groups, the response envelope, file-suffix conventions, cache tags).
  - **`docs/adr/`**: Architecture Decision Records, created lazily when a decision is worth recording.

## 🚦 Getting Started

### Option 1: Development Container (Recommended)

Choose your preferred Development Container environment:

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/holedev/nextjs-faster)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=holedev/nextjs-faster)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/holedev/nextjs-faster)

This automatically sets up your development environment with all dependencies installed. Remember to set up your environment variables based on the platform you choose.

### Option 2: Local Development

```bash
git clone git@github.com:holedev/nextjs-faster.git
cd nextjs-faster

# use the pinned toolchain (optional) — Node version is managed via mise.toml
mise install

# enable pnpm via corepack (optional)
corepack enable pnpm

# setup environment variables
cp .env.example .env

# install dependencies
pnpm i

# dev
pnpm dev
```

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fholedev%2Fnextjs-faster&env=NEXT_PUBLIC_API_URL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,DATABASE_URL&envDescription=You%20can%20get%20a%20free%20API%20key%20in%20Supabase&envLink=https%3A%2F%2Fsupabase.com%2Fdocs%2Fguides%2Fauth%2Fserver-side%2Fnextjs&project-name=nextjs-faster&repository-name=nextjs-faster&demo-title=NextJS%20Faster&demo-description=Rapid%20development%20with%20Next.js%2016%2C%20TypeScript%2C%20Shadcn%20UI%2C%20Prisma%20and%20Swagger.&demo-url=https%3A%2F%2Fnextjs-faster.vercel.app)

### Docker

```bash
docker compose up
```

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── [locale]/        # i18n routes (public / private route groups)
│   ├── api/             # API endpoints
│   └── api-docs/        # Swagger UI
├── components/          # React components
│   ├── custom/          # Project components
│   └── ui/              # Shadcn UI components
├── configs/             # Configuration
│   ├── data/            # Sample data
│   ├── i18n/            # i18n config
│   ├── messages/        # Translation files
│   ├── prisma/          # Database schema & client
│   ├── supabase/        # Auth config
│   └── swagger/         # API documentation
├── constants/           # Shared constants (routes, cache tags, locales)
├── hooks/               # React hooks
├── lib/                 # Library helpers
├── types/               # Shared TypeScript types
├── utils/               # Utilities (response envelope, error handling)
└── docs/                # Domain & agent documentation
```

## 📝 License

MIT License — fork, modify and use as you wish.

## 👨‍💻 Author

[@holedev](https://www.github.com/holedev)
