import nestjsFormatterConfig from './nestjs/formatter.mjs';
import nestjsImportConfig from './nestjs/import.mjs';
import nestjsNestConfig from './nestjs/nestjs.mjs';
import nestjsRestrictConfig from './nestjs/restrict.mjs';
import reactFormatterConfig from './react/formatter.mjs';

const configMap = {
  react:  [reactFormatterConfig],
  nestjs: [
    nestjsFormatterConfig,
    nestjsImportConfig,
    ...nestjsRestrictConfig,
    ...nestjsNestConfig,
  ],
};

export default configMap;
