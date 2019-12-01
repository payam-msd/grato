import createRepository from '~/functions/repository.js'
export default (ctx, inject) => {
	const repositoryWithAxios = createRepository(ctx.$axios)
	const repositories = {
		//*  Post
		createUser: repositoryWithAxios('users'),
		addToCart: repositoryWithAxios('user/self/cart/items'),

		// * Update
		userInfo: repositoryWithAxios('user/self'),

		//* Get
		categories: repositoryWithAxios('categories'),
		cart: repositoryWithAxios('user/self/cart'),
		products: repositoryWithAxios('products'),
		latestProducts: repositoryWithAxios('products/new'),
		bestsellers: repositoryWithAxios('products/bestsellers'),
		specialOffers: repositoryWithAxios('products/special_offers'),
		shopSuggestion: repositoryWithAxios('products/suggestions'),
		instantSuggestion: repositoryWithAxios('products/instant_suggestions'),
		provinces: repositoryWithAxios('provinces'),

		//* Show   |   they receives an ID. more on => ~/api/repository
		productDetail: repositoryWithAxios('products'),
		provincesCities: repositoryWithAxios('cities'),

		//* Delete  |   they receives an ID. more on => ~/api/repository
		deleteFromCart: repositoryWithAxios('user/self/cart/items'),
	}

	inject('ADD_USER', repositories.createUser)
	inject('ADD_TO_CART', repositories.addToCart)

	inject('FETCH_CATEGORIES', repositories.categories)
	inject('FETCH_PRODUCTS', repositories.products)
	inject('FETCH_CART', repositories.cart)
	inject('FETCH_LATEST_PRODUCTS', repositories.latestProducts)
	inject('FETCH_BESTSELLERS', repositories.bestsellers)
	inject('FETCH_SPECIAL_OFFERS', repositories.specialOffers)
	inject('FETCH_SHOP_SUGGESTIONS', repositories.shopSuggestion)
	inject('FETCH_INSTANT_SUGGESTIONS', repositories.instantSuggestion)
	inject('FETCH_PROVINCES', repositories.provinces)

	inject('SHOW_PRODUCT_DETAIL', repositories.productDetail)
	inject('SHOW_PROVINCES_CITIES', repositories.provincesCities)
	inject('DELETE_FORM_CART', repositories.deleteFromCart)
	inject('UPDATE_USER_INFO', repositories.userInfo)
}
