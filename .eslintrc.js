module.exports = {
  root: true,
  extends: '@react-native',
  plugins: [
    'import',           // This plugin helps with handling ES6+ import/export syntax
    'unused-imports',    // This plugin helps with automatically removing unused imports
  ],
  rules: {
    // Existing rules from '@react-native' are already extended

    // Add your custom clean code rules here
    'no-console': 'warn',                    // Warns about console.log statements
    'no-debugger': 'error',                  // Disallows the use of debugger
    'import/order': ['error', {              // Enforces a specific order for import statements
      'groups': [['builtin', 'external', 'internal']],
      'newlines-between': 'always',
    }],
    'unused-imports/no-unused-imports': 'error',  // Automatically remove unused imports
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
    ],  // Warns about unused variables while allowing variables starting with an underscore
  },
};
