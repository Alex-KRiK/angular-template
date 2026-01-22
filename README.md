# Angular Template (Starter Project)

> A minimal, production-friendly Angular starter template with basic tooling and a clean feature-based structure.

---

## 🚀 Overview

This repository contains an **Angular template project** you can use as a base for new client/internal projects.

Key points:

- **Latest Angular** (see versions in `package.json`)
- **Standalone components** (no NgModules by default)
- **Routing enabled** (examples: `/home`, `/about`, `/docs`)
- **Angular Material** (example button included)
- **dayjs** for date utilities (recommended import wrapper included)
- **ESLint + Prettier** for consistent code style
- **Feature-based architecture**: `features/`, `shared/`, `core/`
- **Path aliases**: `@core/*`, `@shared/*`, `@features/*`, `@env`

---

## 📦 Prerequisites

- **Node.js** (LTS recommended)
- **npm** (or Yarn/Pnpm compatible)
- (Optional) **Angular CLI** installed globally, but not required if you run via `npx`

---

## 📚 Table of Contents

1. [Installation](#-installation)
2. [Development](#-development)
3. [Build](#-build)
4. [Testing](#-testing)
5. [Lint & Format](#-lint--format)
6. [Project Structure](#-project-structure)
7. [Additional Resources](#-additional-resources)

---

## 🔧 Installation

Install dependencies:

```bash
npm install
```

---

## 🏗️ Development

**Start local development server:**

```bash
npm start
```

App runs on: http://localhost:4200

---

## 📦 Build

**Create a production build:**

```bash
npm run build
```

The build artifacts will be stored in the dist/ directory.

---

## 🧪 Testing

```bash
npm test
```

---

## ✅ Lint & Format

**Run ESLint:**

```bash
npm run lint
```

**Run Prettier formatting:**

```bash
npm run format
```

---

## 🗂️ Project Structure

**High-level structure:**

- src/app/core – app-wide providers, tokens, interceptors, core services
- src/app/shared – reusable helpers/types/ui (no feature-specific business logic)
- src/app/features – feature pages (examples: home/about/docs)
- src/environments – environment config files

---

## 🛠️ Additional Resources

- For Angular documentation: https://angular.dev
- For Angular CLI references: https://angular.dev/tools/cli

---
