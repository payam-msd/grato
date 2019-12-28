module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSpacing: false,
                htmlWhitespaceSensitivity: 'ignore',
                insertPragma: false,
                jsxBracketSameLine: true,
                jsxSingleQuote: true,
                printWidth: 80,
                proseWrap: 'preserve',
                quoteProps: 'consistent',
                requirePragma: false,
                semi: false,
                singleQuote: true,
                tabWidth: 2,
                trailingComma: 'all',
                useTabs: true,
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                },
            },
        ],
        'no-undef': 'off',
        'prefer-const': 'off',
        'no-var': 'off',
        'no-redeclare' :'off',
        camelcase: "off",
        'no-console': "off"
    },
}
