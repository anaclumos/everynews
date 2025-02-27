# EveryNews Project Guide

## Build & Development Commands
- `bun run build`: Build all workspace packages
- `bun run dev`: Start development servers for all workspace packages
- `bun run lint`: Lint all workspace packages
- `bun run check`: Run Biome checks and apply automatic fixes
- `bun run check-types`: Type check all workspace packages

## Code Style Guidelines
- **TypeScript**: Use strict typing with TypeScript 5.7
- **Formatting**: 
  - 2 space indentation
  - Line width: 80 characters
  - Double quotes for strings and JSX
  - Semicolons: use as needed (not required)
  - Arrow function parens: always use
  - Trailing commas: always use in multiline
- **Imports**: Auto-organized with Biome
- **Naming**: 
  - camelCase for variables and functions
  - PascalCase for classes and components
  - Use descriptive names
  - Use kebab-case for file names
- **Error Handling**: Use typed errors and proper error boundaries
- **Project Structure**: Monorepo using Turborepo with apps/* and packages/* workspaces
- **Package Manager**: bun v1.2.4 (Node >=18 required)
