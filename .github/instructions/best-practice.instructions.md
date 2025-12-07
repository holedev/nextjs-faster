---
description: Next.js with TypeScript and Shadcn UI best practices
applyTo: **/*.tsx, **/*.ts, src/**/*.ts, src/**/*.tsx
---

# Next.js Best Practices

## Git Repository Manager

- Use conventional commit
- Use rebase for merge branch

## Manager Package

- Use pnpm instead of npm
- Use shadcn instead of shadcn-ui as it is the old name of the library.

## Workflow

- When create a new api route, remember create swagger api document
- When create new UI component, priority to use shadcn@latest before create new component
- When create new page, priority to use i18n with two languages: English and Vietnamese

## Development Environment

- Node.js version 24
- PNPM version >= 10
- Use Turbopack in development (`next dev --turbopack`)
- Use Biome for linting and formatting
- Commits are checked with Biome via lint-staged
- Files are automatically formatted before commits
- Prisma schema location: ./configs/prisma/schema.prisma
- Remember **DONT** write in 'main' branch, write code in 'dev' branch or create new branch if need

## Code Style & Formatting

- Follow Biome's default code style
- Use consistent formatting across all files
- Run Biome checks before committing:
  - `pnpm lint:check` to check with biome
  - `pnpm lint:fix` to fix linting issues
  - `pnpm lint:unsafe` for unsafe fixes
- Fix any Biome warnings or errors before committing

## Project Structure

- Use the App Router directory structure
- Place components in `app` directory for route-specific components
- Place shared components in `components` directory
- Place utilities and helpers in `utils` directory, the `lib` directory is reserved for third-party libraries
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)
- Place configuration files in `configs` directory

## Components

- Use Server Components by default
- Mark client components explicitly with 'use client'
- Client components must use [name].client.tsx naming format
- Components should be less than 300 lines
- Break down large components into smaller, focused ones
- Use subcomponents for complex UIs
- Group related components in feature folders
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Implement proper error boundaries

## Data Fetching

- Use Server Components for data fetching when possible, it should be place in dynamic.tsx file
- Implement proper error handling for data fetching
- Use appropriate caching strategies
- Handle loading and error states appropriately

## Forms and Validation

- Use Zod for form validation
- Implement proper server-side validation
- Handle form errors appropriately
- Show loading states during form submission

## Error Handling

- Use `useHandleError` hook for client-side error handling
  - Always wrap async operations with handleErrorClient
  - Provide success callbacks when needed
  - Control toast notifications with withSuccessNotify parameter
- Use `handleErrorServer` utilities for server-side error handling
  - Use handleErrorServerNoAuth for public routes
  - Use handleErrorServerWithAuth for protected routes
  - Always return ResponseType with proper error or success structure
- Use toast notifications for user feedback
- Implement proper error boundaries in components

## Internationalization (i18n)

- Use next-intl for translations
- Place translation files in configs/messages/
- Support multiple locales (en, vi)
- Use dynamic route groups for localization ([locale])
- Use useTranslations hook for client-side translations
- Place all text in translation files, no hardcoded strings

## Authentication (Supabase)

- Use Supabase SSR client for server-side auth
- Implement proper session handling in middleware
- Use auth callback routes for authentication flow
- Protected routes should use handleErrorServerWithAuth

## State Management

- Minimize client-side state
- Use React Context sparingly
- Prefer server state when possible
- Implement proper loading states
- Use proper TypeScript types for all state
