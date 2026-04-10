import base from 'eslint-plugin-newline-destructuring';

const originalCreate = base.rules.newline.create;

/**
 * ESLint 10 removed `context.getSourceCode()`; the upstream plugin still calls it.
 * @see https://eslint.org/docs/latest/use/migrate-to-10.0.0
 */
export default { rules: { newline: {
  ...base.rules.newline,
  create(context) {
    const ctx = new Proxy(context, { get(target, prop, receiver) {
      if (prop === 'getSourceCode') {
        return () => target.sourceCode;
      }

      return Reflect.get(target, prop, receiver);
    } });

    return originalCreate(ctx);
  },
} } };
