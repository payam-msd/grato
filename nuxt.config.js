require('dotenv').config()
export default {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
		script: [
			{
				src: 'https://unpkg.com/gsap@3.0.0/dist/gsap.js',
			},
		],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {color: '#56C085'},

	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{src: '~/plugins/currency.js'},
		{src: '~/plugins/axios.js'},
		{src: '~/plugins/vuelidate.js'},
		{src: '~/plugins/repository.js'},
		{src: '~/plugins/click-listener.js'},
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// '@nuxtjs/sentry',
		'@nuxtjs/redirect-module',
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/device',
		'@nuxtjs/google-analytics',
		'@nuxtjs/auth',
		'@nuxtjs/dotenv',
	],

	/*
	 ** Axios module configuration
	 */
	axios: {
		baseURL: process.env.API_KEY,
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
						url: '/sessions/users',
						method: 'post',
						propertyName: 'data.token',
					},
					logout: false,
					user: {
						url: '/user/self',
						method: 'get',
						propertyName: false,
					},
				},
			},
		},
		fullPathRedirect: true,
		redirect: {
			login: '/auth/login',
			home: '/',
			logout: '/auth/login',
		},
		token: {
			prefix: 'token_',
		},
	},

	redirect: [
		// Redirect options here
	],

	// sentry: {
	// 	dsn: process.env.SENTRY_DSN,
	// 	config: {}, // Additional config
	// },

	// googleAnalytics: {
	// 	id: 'UA-894237434-1',
	// },

	// vue: {
	// 	config: {
	// 		performance: true,
	// 		devtools: true,
	// 		productionTip: true,
	// 	},
	// },

	pageTransition: 'page',

	/*
	 ** Build configuration
	 */
	build: {
		extend(config, ctx) {
			if (ctx.isDev) {
				config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
			}
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
			// vue-svg-loader config
			const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

			svgRule.test = /\.(png|jpe?g|gif|webp)$/

			config.module.rules.push({
				test: /\.svg$/,
				use: ['babel-loader', 'vue-svg-loader'],
			})
		},
	},
}
