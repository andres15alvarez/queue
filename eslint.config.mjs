// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist']
  },
  // @ts-ignore
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.strict
)
