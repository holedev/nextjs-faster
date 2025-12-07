# 🚀 Next Faster

Rapid development with Next.js 16 TypeScript, Shadcn UI, i18n, Prisma and Swagger. Built for developers who want to move fast without compromising on quality.

## 🛠 Technologies

### Frontend
- Next.js 16 (App Router)
- TypeScript 5
- TailwindCSS 5 (Latest)
- Shadcn UI
- next-intl (i18n)
- Swagger UI

### Backend & Database
- Nextjs API Routes & Server Action
- Prisma ORM
- Supabase Auth & PostgreSQL

### Development Tools
- Dev Containers
- Format & Linting
- Pre-commit hooks
- Semantic Release
- Some rules for Cline, RooCode

## Core Features
- **Dev Containers**: Pre-configured development environment with [Development Container](https://containers.dev/).
- **Code Quality**: Pre-configured with [Biomejs](https://biomejs.dev/), [commitlint](https://commitlint.js.org/) (follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)), pre-commit hooks with [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged).
- **Common UI Components**: Shadcn UI components for rapid development, but you can use another components UI.
- **Light/Dark Mode**: Theme switching based on user preference with next-themes.
- **Multi Language**: Internationalization (i18n) support for multiple languages with next-intl.
- **OAuth2**: Authentication with [Supabase](https://supabase.com/).
- **API Documentation**: Generated API documentation using [Swagger UI](https://swagger.io/tools/swagger-ui/).
- **Auto Release**: Automated release process with [Semantic Release](https://semantic-release.gitbook.io/semantic-release/).
- **Vercel Deployment**: One-click deployment to [Vercel](https://vercel.com/).

## Getting Started

### Option 1: Development Container (Recommended)

Choose your preferred Development Container environment:

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/holedev/nextjs-faster)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=holedev/nextjs-faster)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/holedev/nextjs-faster)

This automatically sets up your development environment with all dependencies installed. Remember setup your environment variables based on the platform you choose.

### Option 2: Local Development

```bash
git clone git@github.com:holedev/nextjs-faster.git
cd nextjs-faster

# use correct version node (optional)
nvm use

# use correct version pnpm (optional)
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
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fholedev%2Fnextjs-faster&env=NEXT_PUBLIC_API_URL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,DATABASE_URL,DIRECT_URL&envDescription=You%20can%20get%20free%20API%20key%20in%20Supabase&envLink=https%3A%2F%2Fsupabase.com%2Fdocs%2Fguides%2Fauth%2Fserver-side%2Fnextjs&project-name=nextjs-faster&repository-name=nextjs-faster&demo-title=NextJS%20Faster&demo-description=Rapidly%20development%20with%20Next.js%2015%2C%20TypeScript%2C%20Shadcn%20UI%2C%20Prisma%20and%20Swagger.&demo-url=https%3A%2F%2Fnextjs-faster.vercel.app)

### Docker
```bash
docker compose up
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

## 📝 License

MIT License - fork, modify and use as you wish.

## 👨‍💻 Author

[@holedev](https://www.github.com/holedev)
