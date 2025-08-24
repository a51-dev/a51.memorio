import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/assets/**',
      '**/types/*.d.ts',
      '**/*.min.js',
      '**/documents/**'
    ]
  },
  // Base configuration for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        a51dev: 'writable',
        process: 'readonly',
        global: 'writable',
        module: 'writable',
        require: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  // JavaScript files configuration
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-var': 'off',
      'no-console': 'off',
      'no-undef': 'off',  // Disable undefined variable checking for JS files
      'no-unused-vars': 'warn',  // Make unused vars warnings instead of errors
      'semi': ['warn', 'never']
    }
  },
  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'no-var': 'off',
      'no-console': 'off',
      'no-undef': 'off',  // TypeScript handles this better
      'no-unused-vars': 'off',  // Use the TypeScript specific version instead
      'semi': ['warn', 'never'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  },
  // Jest test files
  {
    files: ['**/*.test.js', '**/*.test.ts', '**/*.spec.js', '**/*.spec.ts'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        test: 'readonly',
        spyOn: 'readonly'
      }
    },
    rules: {
      'no-undef': 'off'  // Jest globals are defined above
    }
  },
  {
    rules: {
      "no-var": 0,
      "no-empty": 0,
      "no-console": 0,
      "no-process-exit": 0,
      "no-underscore-dangle": 0,
      "no-param-reassign": 0,
      "no-prototype-builtins": 0,
      "no-unused-vars": 0,
      "no-undef": 0,
      "no-debugger": 0,
      "no-dupe-else-if": 0,
      "no-useless-escape": 0,
      "node/no-extraneous-require": 0,
      "node/no-unpublished-require": 0,
      "node/no-unsupported-features/es-syntax": 0,
      "node/no-missing-import": 0,
      "node/no-unpublished-import": 0,
      "node/no-unsupported-features/node-builtins": 0,
      "node/no-missing-require": 0,
      "react/prop-types": 0,
      "react/no-string-refs": 0,
      "react/no-find-dom-node": 0,
      "react/display-name": 0,
      "react/jsx-no-undef": 0,
      "promise/no-nesting": 0,
      "promise/no-callback-in-promise": 0,
      "promise/always-return": 0,
      "promise/catch-or-return": 0,
      "promise/no-return-wrap": 0,
      "promise/valid-params": 0,
      "import/export": 0,
      "import/namespace": 0,
      "import/default": 0,
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "import/no-mutable-exports": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "import/no-duplicates": 0,
      "import/named": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "consistent-return": 0,
      "unicorn/no-process-exit": 0,
      "comma-dangle": [
        "error",
        "never"
      ],
      "prefer-const": [
        "warn"
      ],
      "semi": [
        "warn",
        "never"
      ],
      "max-nested-callbacks": [
        "warn",
        4
      ],
      "no-plusplus": 0,
      "operator-linebreak": [
        "error",
        "after",
        {
          "overrides": {
            "?": "ignore",
            ":": "ignore"
          }
        }
      ]
    }
  }
])
