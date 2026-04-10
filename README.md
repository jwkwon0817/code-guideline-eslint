## 🚀 Installation

```bash
# NPM
npm install --save-dev @code-guideline/eslint

# Yarn
yarn add -D @code-guideline/eslint

# PNPM
pnpm add -D @code-guideline/eslint

# Bun
bun add -D @code-guideline/eslint
```

(Ensure you have Node.js installed.)

**Git dependency:** `import` resolves to the package **source** (`src/index.mjs`), so you do not need a committed `dist` folder locally. For **`require`** (CJS) or generated **`.d.ts`**, use the **npm** tarball or run `pnpm run build` in this repo before packing.

**Style note (v0.1.16+):** shared config avoids **value-aligned** `key-spacing` (no padding columns before `:`) so it does not fight `no-multi-spaces` during `--fix`. See `CHANGELOG.md`.

## 📖 Usage

eslint.config.mjs
```js
import eslintCodeGuideline from '@code-guideline/eslint';

export default eslintCodeGuideline();
```

### If you want to extend the configuration
```js
import eslintCodeGuideline from '@code-guideline/eslint';

const extendConfigs = ['react'];

export default eslintCodeGuideline(extendConfigs);
```

### Available Extends
- react (Published)
- nest (Published)

---

### 🐙 NestJS 프로젝트에서 사용하기

#### 1. NestJS 관련 플러그인 설치

```bash
pnpm add -D @darraghor/eslint-plugin-nestjs-typed
```

#### 2. eslint.config.mjs 예시
```js
import eslintCodeGuideline from '@code-guideline/eslint';

export default eslintCodeGuideline(['nest']);
```

- NestJS 전용 규칙과 타입스크립트, import, 스타일 규칙이 함께 적용됩니다.
- @darraghor/eslint-plugin-nestjs-typed의 flatRecommended preset이 자동 적용됩니다.

#### 3. tsconfig.json 설정 권장
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 🛠 Requirements

- Node.js >= 16
- Internet access to install dependencies

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
