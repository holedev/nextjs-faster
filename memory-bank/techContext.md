# Technology Context

## Framework & Libraries

### Next.js
- Version: ^15.3.0
- Using App Router
- TypeScript support
- Server components with React Server Components (RSC)

### Tailwind CSS
- Version: ^4.0.0
- Upgraded from v3.4.17 to v4
- Configuration in tailwind.config.ts
- Changes made during upgrade:
  - Added `prefix: ""` option
  - Added `future: { hoverOnlyWhenSupported: true }` for better touch device support
  - Using the new `satisfies Config` type assertion
  - Maintained custom theme configuration for shadcn UI compatibility

### UI Components
- shadcn UI (using latest components)
- Radix UI primitives for accessible components
- Dark mode support via next-themes

### State Management & Data Fetching
- Server components for data fetching
- React Server Components (RSC)
- Server Actions for form handling

### Authentication & Backend
- Supabase for authentication
- Prisma for database operations
- API documentation with Swagger

### Development Tools
- pnpm for package management
- Biome for linting and formatting
- Husky for git hooks
- Conventional commits
- TypeScript for type safety

## Environment Setup

### Node.js Requirements
- Node.js >= 20
- PNPM >= 9

### Development Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm format:fix` - Fix formatting issues
- `pnpm lint:fix` - Fix linting issues
- `pnpm check:fix` - Run all checks and fixes

### Code Quality
- Using Biome for consistent code formatting
- Automatic formatting before commits
- TypeScript for static typing

## Configuration Files

### Key Configuration Files
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.ts` - Next.js configuration
- `biome.json` - Biome configuration
- `.env.example` - Environment variables template

### Environment Variables
- Stored in .env (not committed)
- Template provided in .env.example
- Loaded via Next.js built-in support

## Directory Structure

### Core Directories
- `app/` - App Router pages and layouts
- `components/` - React components
- `configs/` - Configuration files
- `public/` - Static assets
- `utils/` - Utility functions

### Component Organization
- `components/ui/` - shadcn UI components
- `components/custom/` - Custom components
- Server/Client component separation with .client.tsx suffix

### Configuration Organization
- `configs/i18n/` - Internationalization setup
- `configs/messages/` - Translation messages
- `configs/prisma/` - Database configuration
- `configs/supabase/` - Authentication setup
- `configs/swagger/` - API documentation

## Styling

### CSS Architecture
- Tailwind CSS v4 for utility-first styling
- Global styles in `app/globals.css`
- CSS variables for theming
- Dark mode support
- Consistent border radius and spacing scale

### Theme Configuration
- Custom color schemes for light/dark modes
- Design tokens as CSS variables
- Responsive container queries
- Custom animation utilities

## Best Practices

### Code Organization
- Clear separation of concerns
- Modular component architecture
- Type-safe development
- Consistent file naming

### Performance
- Server Components by default
- Optimized images with Sharp
- Lazy loading where appropriate
- Route-based code splitting

### Accessibility
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast compliance

### Internationalization
- Multi-language support (English/Vietnamese)
- Route groups for localization
- Translation management
- RTL support ready

## Version Control

### Git Workflow
- Feature branches
- Conventional commits
- Pull request workflow
- Automated checks on commits

### CI/CD
- Automated linting
- Type checking
- Format checking
- Build verification