import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  pluginJs.configs.recommended,
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'no-console': 'off',
      'import/first': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': [0, { commonjs: true, amd: true }],
      'import/named': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/namespace': 0,
      'import/default': 0,
      'import/export': 0,
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      'object-curly-newline': 'off',
      'no-empty-function': 'off',
      'camelcase': 'off',
      'linebreak-style': 0,
      'max-len': 'off',
      'import/prefer-default-export': 'off',
      'no-plusplus': 'off',
      'import/extensions': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'no-return-assign': 'off',
      'max-classes-per-file': 'off',
      'lines-between-class-members': 'off',
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': 'off',
    },
  },
];
