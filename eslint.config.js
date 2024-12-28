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

// import globals from 'globals';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import js from '@eslint/js';
// import { FlatCompat } from '@eslint/eslintrc';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// });
//
// export default [
//   ...compat.extends('eslint:recommended'),
//   {
//     languageOptions: {
//       globals: {
//         ...globals.node,
//       },
//
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//     },
//
//     rules: {
//       'no-constant-condition': [
//         'error',
//         {
//           checkLoops: false,
//         },
//       ],
//
//       'no-global-assign': [
//         'error',
//         {
//           exceptions: ['require'],
//         },
//       ],
//
//       'no-redeclare': 'off',
//       'no-regex-spaces': 'off',
//       'no-unused-vars': 'off',
//     },
//   },
// ];
