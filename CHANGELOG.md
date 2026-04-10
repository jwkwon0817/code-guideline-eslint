# Changelog

## 0.1.16

### Fixed (styling / ESLint)

- **Circular autofix / `ESLintCircularFixesWarning`:** `@stylistic/key-spacing` previously used value-column **alignment**, which inserts multiple spaces after keys in objects and TypeScript `interface` / type fields. That fought **`@stylistic/no-multi-spaces`** (and autofixes could loop). **Alignment was removed:** `key-spacing` now uses the same single-space-after-colon style for single- and multi-line properties without padding columns. This is a **visible style change** for code that relied on aligned colons.
- **Comments + statement padding:** `@stylistic/lines-around-comment` now allows **module start/end** (`allowModuleStart` / `allowModuleEnd`), and `@stylistic/padding-line-between-statements` allows **consecutive `export`s** and **`import` followed by `export`** without a forced blank line. That reduces clashes with file-header block comments and barrel `export` lists.

### Packaging

- **`exports.import` / `default`** now resolve to **`./src/index.mjs`** so installs from **git** (no pre-built `dist`) still load the config. The **`dist`** bundle remains published for **`require`** (CJS) and **TypeScript types** (`prepublishOnly` still runs `build`).

### Versioning note

Relaxing alignment and padding is treated as a **minor** (0.x) change: repos that passed only with aligned keys or strict export spacing may need a one-time `eslint --fix` or small edits.
