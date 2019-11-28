module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'prettier'
    ],
    // add your custom rules here
    rules: {
        "camelcase": "off",
        "no-var": "off",
        "no-undef": "off",
        "prefer-const": "off",
        "no-console": "off",
        "no-new": "off",
        "vue/no-unused-components": "off",
        "vue/require-component-is": "off",
        "vue/attributes-order": "off"
    }
}
