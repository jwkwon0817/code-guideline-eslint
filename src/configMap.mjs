import reactFormatterConfig from './react/formatter.mjs';
import nestjsFormatterConfig from './nestjs/formatter.mjs';
import nestjsImportConfig from './nestjs/import.mjs';
import nestjsRestrictConfig from './nestjs/restrict.mjs';
import nestjsNestConfig from './nestjs/nestjs.mjs';

const configMap = {
  react: [reactFormatterConfig],
  nestjs: [
    nestjsFormatterConfig,
    nestjsImportConfig,
    ...nestjsRestrictConfig,
    ...nestjsNestConfig,
  ],
};

export default configMap;
