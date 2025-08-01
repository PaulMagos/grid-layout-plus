import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{js,ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      vue
    },
    rules: {
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'vue/no-v-html': 'off',
      'vue/no-textarea-mustache': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'no-unused-vars': 'off'
    }
  },
  {
    files: ['src/**/*.vue'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false
        }
      ],
      'vue/no-restricted-block': [
        'error',
        {
          element: '/[^(template|script)]/',
          message: 'Do not use blocks other than <template> or <script>.'
        }
      ]
    }
  },
  {
    files: ['docs/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['scripts/**'],
    rules: {
      'no-sequences': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  },
  {
    ignores: ['**/node_modules/**', 'dist/**', 'lib/**', 'es/**', '**/*.d.ts']
  }
]
