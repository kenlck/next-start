# Next.js Template Repository

A starter template for building modern web applications with Next.js, Prisma, authentication, TRPC, and a dashboard layout.

## Features

- Next.js (App Router, TypeScript)
- Prisma ORM with migrations
- Authentication (NextAuth.js)
- TRPC API routes
- Dashboard layout and content management
- Shadcn/ui component library
- Pre-configured ESLint, PostCSS, and TypeScript

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables**

   - Copy `.env.example` to `.env` and update values as needed (e.g., database URL, auth secrets).

3. **Run database migrations**

   ```bash
   npx prisma migrate dev
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Use this template as a starting point for your Next.js projects.
- Customize components, routes, and features as needed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [TRPC Documentation](https://trpc.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
