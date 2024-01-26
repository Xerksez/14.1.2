module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    plugins: ['react-hooks', 'jsx-a11y'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/anchor-is-valid': 'off',
        // Additional ESLint rules can go here
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
