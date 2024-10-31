# Vite Template

A simple template for Vite and React.

- [Next Template](#vite-template)
  - [Stack](#stack)
  - [Branches](#branches)
  - [Setup](#setup)
  - [Resources](#resources)

## Stack

- Linting / Code Style
  - [eslint](https://www.npmjs.com/package/eslint)
    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
    - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
    - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
    - [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
    - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
    - [eslint-plugin-tailwindcss](https://www.npmjs.com/package/eslint-plugin-tailwindcss)
    - [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library)
    - [eslint-plugin-jest-dom](https://www.npmjs.com/package/eslint-plugin-jest-dom)
    - [@vitest/eslint-plugin](https://www.npmjs.com/package/@vitest/eslint-plugin)
    - [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file)
      - [Bulletproof React Guide](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-standards.md#file-naming-conventions)
  - [prettier](https://www.npmjs.com/package/prettier)
    - [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
    - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
      - [Automatic Class Sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)
- Commits
  - [husky](https://www.npmjs.com/package/husky)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [commitlint](https://www.npmjs.com/package/@commitlint/cli)
    - [config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
    - [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - [commitizen](https://www.npmjs.com/package/commitizen)
    - [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
- Styles / UI
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss)
  - [shadcn/ui](https://ui.shadcn.com/)
  - [magicui](https://magicui.design/)
  - [radix-ui](https://www.radix-ui.com/)
  - [lucide-react](https://www.npmjs.com/package/lucide-react)
- Testing
  - [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
  - [@testing-library/dom](https://www.npmjs.com/package/@testing-library/dom)
  - [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
  - [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)
  - [jsdom](https://www.npmjs.com/package/jsdom)
  - [vitest](https://www.npmjs.com/package/vitest)
- Router
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)

## Branches

The main branch contains the entire setup. The following branches build on each other from top to bottom:

- [base](https://github.com/4nktt/vite-template/tree/base)
  - eslint / prettier / vscode / husky / lint-staged / commitlint / commitzen / tailwindcss
- [ui](https://github.com/4nktt/vite-template/tree/ui)
  - shadcn/ui
  - dark / light theme toggle
- [test](https://github.com/4nktt/vite-template/tree/test)
  - @testing-library/react
  - vitest
- [router](https://github.com/4nktt/vite-template/tree/router) / [main](https://github.com/4nktt/vite-template)
  - react router dom

## Setup

1. Install dependencies:

```sh
pnpm install
```

2. Start the app:

```sh
pnpm run dev
```

## Resources

- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
