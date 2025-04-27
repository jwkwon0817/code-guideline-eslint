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
- nest (In progress)

## 🛠 Requirements

- Node.js >= 16
- Internet access to install dependencies

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
