# Changelog

## 0.1.17

### Fixed (styling / ESLint)

- **TSX + `no-multi-spaces`:** React 프리셋에서 타입 리터럴/인터페이스 멤버는 AST상 **`TSPropertySignature`** 등이라 기본 `Property` 예외가 적용되지 않아, 정렬 공백과 **`key-spacing`이 교차 autofix**될 수 있었습니다. `exceptions`에 `TSPropertySignature`, `TSIndexSignature`, `TSMethodSignature`를 추가했습니다.

## 0.1.16

### Fixed (styling / ESLint)

- **Circular autofix / `ESLintCircularFixesWarning`:** `@stylistic/key-spacing` previously used value-column **alignment**, which inserts multiple spaces after keys in objects and TypeScript `interface` / type fields. That fought **`@stylistic/no-multi-spaces`** (and autofixes could loop). **Alignment was removed:** `key-spacing` now uses the same single-space-after-colon style for single- and multi-line properties without padding columns. This is a **visible style change** for code that relied on aligned colons.
- **Comments + statement padding:** `@stylistic/lines-around-comment` now allows **module start/end** (`allowModuleStart` / `allowModuleEnd`), and `@stylistic/padding-line-between-statements` allows **consecutive `export`s** and **`import` followed by `export`** without a forced blank line. That reduces clashes with file-header block comments and barrel `export` lists.

### Packaging

- **`exports.import`** resolves to **`./src/index.mjs`** so **git** installs without `dist` still work for ESM. **`require`**는 **`./dist/index.cjs`**, **`types`**는 **`./dist/index.d.ts`** (`prepublishOnly`에서 빌드).

### Versioning note

Relaxing alignment and padding is treated as a **minor** (0.x) change: repos that passed only with aligned keys or strict export spacing may need a one-time `eslint --fix` or small edits.
