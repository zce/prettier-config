export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  printWidth: 160,
  plugins: [
    import.meta.resolve('@ianvs/prettier-plugin-sort-imports'),
    import.meta.resolve('prettier-plugin-tailwindcss')
  ],
  tailwindStylesheet: 'theme.css',
  tailwindAttributes: ['enterFrom', 'enterTo', 'leaveFrom', 'leaveTo'],
  tailwindFunctions: ['cn', 'cva', 'twc'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(~|@\/|#)',
    '^@/',
    '^#',
    '',
    '^[.]',
    '',
    '<TYPES>',
    '<TYPES>^(~|@\/|#)',
    '<TYPES>^[.]'
  ]
}
