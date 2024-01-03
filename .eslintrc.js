/*
 * Copyright (c) 2023 Huawei Technologies Co.,Ltd.
 *
 * openInula is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *
 *          http://license.coscl.org.cn/MulanPSL2
 *
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,

  plugins: ['jest', 'no-for-of-loops', 'no-function-declare-after-return', 'react', '@typescript-eslint','jsdoc'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    'accessor-pairs': 'off',
    'brace-style': ['error', '1tbs'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'max-lines-per-function': 'off',
    'object-curly-newline': 'off',
    // 尾随逗号
    'comma-dangle': ['error', 'only-multiline'],

    'no-constant-condition': 'off',
    'no-for-of-loops/no-for-of-loops': 'error',
    'no-function-declare-after-return/no-function-declare-after-return': 'error',

    // jsdoc注释规则
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: ['TSInterfaceDeclaration'] // 检查接口是否写注释
      }
    ], // 检查函数是否写注释
    'jsdoc/check-alignment': 'warn', // 注释的*号是否对齐
    'jsdoc/check-examples': 'warn', // 在每个函数注释中要写一个@example fun()(如何使用这个函数)
    'jsdoc/check-indentation': 'warn', // 注释内有空格无效填充
    'jsdoc/check-param-names': ['warn'], // 检查函数参数名称和注释是否匹配
    'jsdoc/check-syntax': 'warn',
    'jsdoc/check-tag-names': 'warn', // 检查标签名是否有效
    'jsdoc/check-types': 'warn', // 报告无效类型
    'jsdoc/implements-on-classes': 'warn', //
    'jsdoc/match-description': [
      'warn',
    ], // 对描述通过正则表单式匹配
    'jsdoc/newline-after-description': 'warn', // 在描述注释之后必须空一行
    'jsdoc/no-types': 'warn', // 不需要写类型
    'jsdoc/no-undefined-types': 'warn', // 写的类型不在规则里面
    'jsdoc/require-description': ['warn', { descriptionStyle: 'any' }], // 别要求写描述
    'jsdoc/require-description-complete-sentence': ['warn'], // 描述必须以大写开头.结尾
    'jsdoc/require-example': 'warn', // 别要求写例子
    'jsdoc/require-hyphen-before-param-description': 'warn', // 参数描述之前和描述之间必须-链接
    'jsdoc/require-param': 'warn', // 别要求写参数
    'jsdoc/require-param-description': 'warn', // 参数必须写描述
    'jsdoc/require-param-name': 'warn', // 参数必须写名字
    'jsdoc/require-param-type': 'warn', // 参数必须下类型jsdoc
    'jsdoc/require-returns': 'warn', // 要求写return注释
    'jsdoc/require-returns-check': 'warn', // 检查是否有必要写return注释
    'jsdoc/require-returns-description': 'warn', // 要求写return藐视
    'jsdoc/require-returns-type': 'warn', // 要求写return类型
    'jsdoc/valid-types': 'warn', // 有效的类型
  },
  globals: {
    isDev: true,
    isTest: true,
  },
  overrides: [
    {
      files: ['scripts/__tests__/**/*.js'],
      globals: {
        container: true,
      },
    },
  ],
};
