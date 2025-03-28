# Technical Context

## Core Technologies

### Frontend Framework
- Next.js 15.1.6
- React 19.0.0
- TypeScript 5.x

### Styling
- TailwindCSS 3.4.1
- Tailwind Merge
- Class Variance Authority
- Tailwind Animate

### UI Components
- Radix UI Components
  - Avatar
  - Dialog
  - Dropdown Menu
  - Icons
  - Label
  - Select
  - Separator
  - Slot
  - Toast
  - Tooltip

### Backend & Database
- Prisma 6.3.1
- Supabase
  - SSR Integration
  - Supabase JS Client

### Internationalization
- next-intl 3.23.5

## Development Environment

### Node.js Requirements
- Node.js >= 20
- PNPM >= 9
- Package Manager: pnpm@9.12.3

### Development Tools
- ESLint 9.x
- Prettier 3.3.3
- TypeScript 5.x
- Husky for Git Hooks
- lint-staged for Staged Files
- commitlint for Commit Messages

### Docker Environment
- Base Image: node:20.15.1-alpine
- Multi-stage build process
- Development container support
- Production optimization

### Environment Variables
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=        # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # Supabase anonymous key

# Database Configuration
DATABASE_URL=                     # Primary database connection URL
DIRECT_URL=                      # Direct database connection URL
```

## Installation Methods

### 1. Local Development
```bash
# Clone repository
git clone git@github.com:holedev/starter-kit.git
cd starter-kit

# Environment setup
cp .env.example .env
# Configure environment variables

# Install dependencies
pnpm i

# Start development server
pnpm dev
```

### 2. Docker Development
```bash
# Start with Docker Compose
docker compose up

# Or use VS Code Dev Containers
# 1. Open in VS Code
# 2. Reopen in Container
```

### Scripts
```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "lint:fix": "eslint --fix",
  "format": "prettier --check .",
  "format:fix": "prettier --write .",
  "prepare": "husky",
  "lint-staged": "lint-staged",
  "commitlint": "commitlint --edit",
  "postinstall": "prisma generate"
}
```

## Dependencies

### Production Dependencies
```json
{
  "@prisma/client": "6.3.1",
  "@supabase/ssr": "^0.5.1",
  "@supabase/supabase-js": "^2.45.6",
  "next": "15.1.6",
  "next-intl": "^3.23.5",
  "next-themes": "^0.4.4",
  "react": "19.0.0",
  "react-dom": "19.0.0"
}
```

### Development Dependencies
```json
{
  "@commitlint/cli": "^19.5.0",
  "@commitlint/config-conventional": "^19.5.0",
  "@next/eslint-plugin-next": "^15.0.1",
  "eslint": "^9",
  "eslint-config-next": "15.1.6",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-jsx-a11y": "^6.10.2",
  "prisma": "^6.3.1",
  "typescript": "^5"
}
```

## Deployment Options

### 1. Vercel Deployment
- One-click deployment
- Automatic environment setup
- Required environment variables:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - DATABASE_URL
  - DIRECT_URL

### 2. Docker Deployment
- Multi-stage build optimization
- Production-ready container
- Environment variable management
- Security hardening:
  - Non-root user
  - Minimal base image
  - Secure defaults

## Technical Constraints

### Browser Support
- Modern browsers
- ES6+ JavaScript support
- CSS Grid and Flexbox support

### Performance Requirements
- Fast page loads with SSR
- Optimized client-side navigation
- Efficient data fetching

### Security Considerations
- Secure authentication flows
- Protected API routes
- Type-safe database operations
- Environment variable management
- Docker security best practices

## Development Setup

### Environment Variables
Required environment variables:
- Database connection
- Supabase configuration
- API endpoints
- Authentication settings

### Database Setup
- Prisma as ORM
- Schema location: ./configs/prisma/schema.prisma
- Migration management
- Type-safe queries

### Code Quality
```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "pnpm format:fix",
    "pnpm lint:fix"
  ]
}
```

### Build Process
1. Install dependencies with pnpm
2. Generate Prisma client
3. Build Next.js application
4. Environment configuration
5. Database migrations

### Docker Build Process
1. Dependencies stage
   - System dependencies
   - Node modules
   - Prisma client

2. Builder stage
   - Application build
   - Static file generation
   - Standalone output

3. Runner stage
   - Production optimization
   - Security hardening
   - Environment setup

This technical context provides the foundation for development decisions and should be updated as dependencies or technical requirements change.