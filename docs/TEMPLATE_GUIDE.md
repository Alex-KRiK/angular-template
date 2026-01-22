# Template Guide (How to start a new project from this Angular template)

> This guide explains the **only supported workflow** for using this repository as a base for a new client/internal project: **Download ZIP → init a fresh repo**.

---

## 📚 Table of Contents

1. [What this template includes](#-what-this-template-includes)
2. [Template versions](#-template-versions)
3. [Prerequisites](#-prerequisites)
4. [ZIP → fresh repo workflow](#-the-only-supported-workflow-zip--fresh-repo)
5. [What to rename](#-what-to-rename-checklist)
6. [Folder structure rules](#-folder-structure-rules)
7. [Text convention (StaticTextHelper)](#-text--labels-convention-statictexthelper)
8. [DayJS usage](#-dayjs-usage)
9. [Code quality workflow](#-code-quality-workflow)
10. [ESLint HTML attribute ordering](#-notes-about-html-attribute-ordering-eslint)
11. [Adding a new feature](#-adding-a-new-feature-example)
12. [Additional Resources](#-additional-resources)

---

## ✅ What this template includes

- Latest **Angular** (check exact version in `package.json`)
- Standalone architecture (no NgModules by default)
- Example feature routing: `/home` and `/about`
- **Angular Material** installed + example button usage
- **dayjs** installed (recommended wrapper approach)
- **ESLint + Prettier** configured
- Feature-based folder structure: `core/`, `shared/`, `features/`
- Path aliases: `@core/*`, `@shared/*`, `@features/*`, `@env`

---

## 🧾 Template versions

**Template was generated with:**

- `Angular`: 21.1.0
- `Angular Material`: 21.1.1
- `DayJS`: 1.11.19
- `npm`: 11.0.0

Exact versions are pinned in `package.json` / `package-lock.json`.

---

## 📦 Prerequisites

- Node.js (LTS recommended)
- npm (or Yarn/Pnpm compatible)

---

## ✅ The only supported workflow: ZIP → fresh repo

### 1) Download ZIP

- GitHub → repo page → **Code** → **Download ZIP**
- Extract it into your project folder

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm start
```

App runs on: http://localhost:4200

### 4) Initialize git and push to the client repo

```
git init
git add .
git commit -m "Initial commit"
git remote add origin <CLIENT_REPO_URL>
git push -u origin main
```

---

## ✍️ What to rename (checklist)

**These are places where template naming appears.**

### 1) package.json

- "name": "angular-template" → change to your project name

### 2) src/index.html

- title tag: "Angular Template" → change to your project title

### 3) angular.json

- projects: { "angular-template": → project name keys change to your project name
- defaultProject (if present) → keep consistent with the project name

---

## 🗂️ Folder structure rules

**`src/app/core`**
**Use for:**

- app-wide singleton services
- interceptors
- tokens (InjectionToken)
- config providers
- global app initialization

**`src/app/shared`**
**Use for:**

- reusable UI components (generic)
- directives / pipes
- helpers
- types
- shared services (not feature-specific)

**`src/app/features`**
**Use for:**

- page-level features (routes)
- feature components and feature-only services
- each feature in its own folder (example: home, about)

---

## 🧩 Text / labels convention (StaticTextHelper)

**Centralized UI text lives in:**

- `src/app/shared/helpers/static-text.helper.ts`

**Benefits:**

- no DI required
- type-safe constants
- easy to migrate to i18n later ($localize)

**Usage in component:**

```ts
import { StaticTextHelper } from '@shared/helpers';

export class SomeComponent {
  protected readonly StaticTextHelper = StaticTextHelper;
}
```

**Usage in component:**

```html
<p>{{ StaticTextHelper.common.save }}</p>
```

---

## ⏱️ DayJS usage

**DayJS is installed to standardize date utilities.**
**Recommended approach:**

- keep a single wrapper/export file (example: `src/app/core/date/dayjs.ts`)
- enable required plugins there (utc, timezone, etc.)
- import only from the wrapper to avoid “plugin not initialized” issues

**Wrapper example (`src/app/core/date/dayjs.ts`):**

```ts
import { dayjs } from '@core/date/dayjs';

const nowUtc = dayjs().utc().format();
```

**Template demo (Live clock in Home feature):**
This template includes a small DayJS demo: a live clock updated every second.

**Component:**

```ts
import { signal, OnDestroy } from '@angular/core';
import { dayjs } from '@core/date/dayjs';

protected readonly currentTime = signal(dayjs().format('HH:mm:ss'));

private readonly timerId = window.setInterval(() => {
  this.currentTime.set(dayjs().format('HH:mm:ss'));
}, 1000);
```

**Template:**

```html
<div class="clock__value">{{ currentTime() }}</div>
```

---

## ✅ Code quality workflow

**Format code**

```bash
npm run format
```

**Check formatting (CI-friendly)**

```bash
npm run format:check
```

**Lint**

```bash
npm run lint
```

**Test**

```bash
npm run test
```

**Verify**

```bash
npm run verify
```

---

## 🧰 Notes about HTML attribute ordering (ESLint)

**This template enforces consistent HTML attribute order.**
**If you see lint errors like:**

- @angular-eslint/template/attributes-order

**Run auto-fix:**

```bash
npm run lint -- --fix
```

---

## 🛠️ Adding a new feature (example)

**Create a new folder:**

- `src/app/features/my-feature`

**Add a standalone component and lazy route, then include it in app.routes.ts.**
**Recommended naming:**

- feature path: `my-feature`
- class: my-feature-container
- route: `/my-feature`

---

## 📚 Additional Resources

- Angular docs: https://angular.dev
- Angular CLI reference: https://angular.dev/tools/cli

---
