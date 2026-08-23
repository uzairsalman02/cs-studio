# Product Requirements Document (PRD)

## Project Overview
**CS Studio** is an interactive, computer science learning platform and presenter framework designed for curriculum-aligned digital pedagogy, security, and administrative management.

## Core Architectural Components
- **Pedagogy Engine (`src/components/pedagogy`)**: Manages interactive learning modules, exercises, and subject content delivery.
- **Presenter Framework (`src/components/presenter`)**: Powers live lecture slides, interactive demos, and presentation state synchronization.
- **Security System (`src/components/security`)**: Handles authentication controls, role-based access governance, and secure data scoping.
- **Common UI Library (`src/components/common`)**: Reusable, accessible UI components built with Tailwind CSS and Next.js App Router.
- **Curriculum Data Store (`src/data/punjab-11`)**: Structured data files for Class 11 Punjab Board Computer Science curriculum.

## Route Architecture
- `src/app/(auth)`: Authentication flows (login, register, reset password).
- `src/app/admin`: Administrative dashboard for content, user, and curriculum management.
- `src/app/learn/[curriculum]/[unit]/[topic]`: Dynamic learning path routing for units and topics.

## Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting & Quality**: ESLint
