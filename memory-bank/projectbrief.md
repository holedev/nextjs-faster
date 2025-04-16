# Project Brief

## Project Overview
This is a modern web application built with Next.js 15, designed as a kit for scalable applications. The project implements best practices and a comprehensive set of features to serve as a foundation for building production-ready web applications.

## Core Requirements

### Technical Foundation
- Next.js 15 with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Shadcn/UI component library
- Prisma for database management
- Supabase for authentication and backend services
- Docker for containerization
- VSCode Devcontainer support

### Key Features
1. Authentication System
   - Supabase integration
   - OAuth Social Media login
   - Protected routes
   - User profile management

2. Internationalization (i18n)
   - Multi-language support with next-intl
   - Language switching
   - Localized content management

3. Theme Support
   - Light/Dark mode with next-themes
   - Theme provider integration
   - Consistent UI components

4. Development Quality
   - Conventional Commits
   - ESLint and Prettier configuration
   - Husky pre-commit hooks
   - lint-staged for staged files
   - Semantic Release automation

5. Containerization
   - Docker Compose setup
   - Development container configuration
   - Production-ready Docker builds

6. Data Management
   - Prisma database integration
   - Type-safe database operations
   - Migration system

## Project Goals
1. Provide a robust starting point for web applications
2. Implement best practices for modern web development
3. Ensure scalability and maintainability
4. Deliver excellent developer experience
5. Support rapid application development
6. Enable easy deployment to production

## Architecture Overview
The project follows a clear architectural pattern with:
- App Router based routing
- Server and client components separation
- Organized component structure
- Centralized configuration
- Type-safe utilities
- Containerized environments

## Quality Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commit messages
- Automated semantic releases
- Comprehensive error handling

## Deployment Options
1. Vercel Deployment
   - One-click deployment support
   - Environment variable configuration
   - Production optimization

2. Docker Deployment
   - Docker Compose orchestration
   - Multi-stage build process
   - Development and production configurations

## Environment Setup
Required environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
DIRECT_URL=
```

This brief serves as the foundation for all development decisions and will be updated as the project evolves.