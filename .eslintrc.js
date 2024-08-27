module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier.
        'airbnb-typescript', // Airbnb's ESLint config with TypeScript support.
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the react version
        },
    },
    rules: {
        'prettier/prettier': 'error', // Make Prettier issues show as ESLint errors
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with underscore
        'react/react-in-jsx-scope': 'off', // Not needed in React 17+
        // Other rules can be included here
        'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        'import/prefer-default-export': 'off', // Disable preference for default exports
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'jsx-a11y/anchor-is-valid': 'off', // For next.js usage
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return types for functions
        'react/jsx-props-no-spreading': 'off', // Allow props spreading
    },
};
