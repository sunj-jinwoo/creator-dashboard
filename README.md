Creator Dashboard
A content management tool for YouTube creators to organize video ideas through a simple Kanban-style pipeline — from idea to upload.
Built this as my first full-stack project to put my Next.js skills to the test with a real use case I actually care about.
Live Demo: https://creator-dashboard-tan.vercel.app
What it does

Sign in with Google
Add video ideas with a title and description
Move ideas through stages: Idea → Scripting → Editing → Uploaded
Delete ideas you've dropped

Tech Stack

Next.js 16 with App Router and TypeScript
PostgreSQL via Supabase
Prisma ORM for database queries
NextAuth.js for Google OAuth
Tailwind CSS for styling
Vercel for deployment

Things I figured out building this

How server and client components work in Next.js App Router
Setting up authentication with a database adapter
Using Server Actions to handle form submissions securely
Connecting a serverless app to a hosted database
