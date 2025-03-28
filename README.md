# STARTER KIT

A modern web application starter kit built with `Next.js 15`, `TypeScript`, `Shadcn/UI`, `Prisma`, and `Supabase`. This project implements best practices and provides a comprehensive foundation for building production-ready applications.

## Features

### Core Features
- **Next.js 15 App Router**
  - Server and client components
  - API routes
  - Optimized routing
  - SEO-friendly structure

- **Authentication System**
  - OAuth Social Media login with [Supabase](https://supabase.com/docs)
  - Protected routes
  - User session management
  - Role-based access control

- **Internationalization**
  - Multi-language support with [next-intl](https://next-intl-docs.vercel.app/)
  - Dynamic language switching
  - Route-based locale handling
  - Structured translation files

- **Theme System**
  - Light/dark mode toggle with [next-themes](https://github.com/pacocoursey/next-themes)
  - Persistent theme preferences
  - System theme detection
  - Customizable design tokens

### Development Features
- **Code Quality**
  - TypeScript for type safety
  - ESLint for code linting
  - Prettier for code formatting
  - Conventional Commits
  - Husky pre-commit hooks
  - lint-staged for staged files

- **Database Integration**
  - Prisma ORM
  - Type-safe queries
  - Migration system
  - Connection pooling
  - Automated client generation

- **Development Environment**
  - Docker containerization
  - VS Code devcontainer support
  - Hot reloading
  - Development/Production parity

- **UI Components**
  - Shadcn/UI integration
  - Responsive design patterns
  - Accessible components
  - Customizable themes

## Quick Start

### Prerequisites
- Node.js >= 20
- PNPM >= 9
- Docker (optional)

### Local Development

1. Clone the repository
```bash
git clone git@github.com:holedev/starter-kit.git
cd starter-kit
```

2. Set up environment variables
```bash
cp .env.example .env
```

Required environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=        # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # Supabase anonymous key
DATABASE_URL=                     # Primary database connection URL
DIRECT_URL=                      # Direct database connection URL
```

3. Install dependencies
```bash
pnpm i
```

4. Start development server
```bash
pnpm dev
```

### Docker Development

1. Using Docker Compose
```bash
docker compose up
```

2. Using VS Code Dev Containers
- Open project in VS Code
- Install "Remote - Containers" extension
- Command Palette → "Remote-Containers: Reopen in Container"

## Project Structure

```
app/                    # Next.js app directory
├── [locale]/           # Internationalization routes
│   ├── (private)/     # Protected routes
│   └── (public)/      # Public routes
├── api/               # API routes
└── auth/              # Authentication endpoints

components/            # React components
├── custom/           # Project-specific components
└── ui/               # Reusable UI components

configs/              # Configuration files
├── i18n/            # Internationalization setup
├── messages/        # Translation files
├── prisma/          # Database configuration
└── supabase/        # Supabase integration
```

## Development Workflow

### Available Scripts
```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Check Prettier formatting
pnpm format:fix       # Fix Prettier formatting

# Database
pnpm postinstall      # Generate Prisma client
```

### Git Workflow
- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Use feature branches
- Ensure tests pass before committing
- Keep PRs focused and small

## Deployment

### Vercel Deployment
One-click deployment to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fholedev%2Fstarter-kit&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,DATABASE_URL,DIRECT_URL)

### Docker Deployment
The project includes a multi-stage Dockerfile optimized for production:
- Minimal base image
- Security hardening
- Optimized build layers
- Environment variable support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes following conventional commits
4. Push to the branch
5. Open a Pull Request

## Security

- Keep dependencies updated
- Never commit sensitive data
- Use environment variables
- Follow security best practices

## Authors

- [@holedev](https://www.github.com/holedev)
