import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-global-assign': ['error', { exceptions: ['require'] }],
      'no-redeclare': 'off',
      'no-regex-spaces': 'off',
      'no-unused-vars': 'off',
    },
  },
];
