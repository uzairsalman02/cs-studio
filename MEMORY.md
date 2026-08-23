# Project Memory & Knowledge Base

## System Environment
- **Node.js**: v26.4.0
- **NPM**: v11.17.0
- **Framework**: Next.js 14+ (App Router)
- **Path Alias**: `@/*` mapping to `./src/*`

## Architecture Decisions
- **App Router Layout**: Scoped routing using route groups `(auth)`, `admin`, and `learn/[curriculum]/[unit]/[topic]`.
- **Modular Component Split**: Clear separation between generic components (`common`), teaching widgets (`pedagogy`), live slides (`presenter`), and security utilities (`security`).
- **Data Layer**: Local curriculum dataset placed under `src/data/punjab-11`.
