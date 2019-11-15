export default {
    mode: "universal",
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || "",
            },
        ],
        link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
        script: [
            {
                src: "https://unpkg.com/gsap@3.0.0/dist/gsap.js",
            },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {color: "#56C085"},

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // {src: "~/plugins/vue-swatches.js", mode: "client"},
        {src: "~/plugins/vue-numeral-filter.js", mode: "client"},
        {src: "~/plugins/v-scroll-lock.js", mode: "client"},
        {src: "~/plugins/axios.js"},
        {src: "~/plugins/vuelidate.js"},
        {src: "~/plugins/repository.js"},
        {src: "~/plugins/vue-bytesize-icons.js"},
        {src: "~/plugins/click-listener.js"},
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        "@nuxtjs/eslint-module",
        "@nuxtjs/auth",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/google-analytics",
    ],

    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/axios"],

    /*
     ** Axios module configuration
     */
    axios: {
        baseURL: "http://test.api.shop.ratin.cloud/v1/",
        debug: false,
        retry: {
            retries: 3,
        },
    },

    // router: {
    //     middleware: ["storeRoutes"],
    // },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: "/sessions/users",
                        method: "post",
                        propertyName: "data.token",
                    },
                    logout: false,
                    user: {
                        url: "/user/self",
                        method: "get",
                        propertyName: false,
                    },
                },
            },
        },
        redirect: {
            login: "/",
            home: "/",
            logout: "/auth/login",
        },
        fullPathRedirect: true,
        watchLoggedIn: true,
        resetOnError: true,
        token: {
            prefix: "token_",
        },
    },

    googleAnalytics: {
        id: "UA-894237434-1",
    },

    vue: {
        config: {
            performance: true,
            devtools: true,
            productionTip: true,
        },
    },

    pageTransition: "page",

    /*
     ** Build configuration
     */
    build: {
        transpile: ["vue-bytesize-icons"],
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient
                    ? "source-map"
                    : "inline-source-map"
            }
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                })
            }
            // vue-svg-loader config
            const svgRule = config.module.rules.find(rule =>
                rule.test.test(".svg"),
            )

            svgRule.test = /\.(png|jpe?g|gif|webp)$/

            config.module.rules.push({
                test: /\.svg$/,
                use: ["babel-loader", "vue-svg-loader"],
            })
        },
    },
}
