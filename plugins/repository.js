import createRepository from '~/functions/repository.js'
export default (ctx, inject) => {
	const repositoryWithAxios = createRepository(ctx.$axios)
	const repositories = {
		//*  Post
		createUser: repositoryWithAxios('users'),
		addToCart: repositoryWithAxios('user/self/cart/items'),

		//* Get
		categories: repositoryWithAxios('categories'),
		products: repositoryWithAxios('products'),
		latestProducts: repositoryWithAxios('products/new'),
		bestsellers: repositoryWithAxios('products/bestsellers'),
		specialOffers: repositoryWithAxios('products/special_offers'),
		shopSuggestion: repositoryWithAxios('products/suggestions'),
		instantSuggestion: repositoryWithAxios('products/instant_suggestions'),
		ProductOption: repositoryWithAxios('options'),
		userOrders: repositoryWithAxios('user/self/cart'),
		Provinces: repositoryWithAxios('provinces'),

		//* Show   |   they receives an ID. more on => ~/api/repository
		showProductDetail: repositoryWithAxios('products'),
		showProductColors: repositoryWithAxios('options'),
		showProvincesCities: repositoryWithAxios('cities'),

		//* Delete  |   they receives an ID. more on => ~/api/repository
		deleteFromCart: repositoryWithAxios('user/self/cart/items'),
	}

	inject('ADD_USER', repositories.createUser)
	inject('ADD_TO_CART', repositories.addToCart)

	inject('FETCH_CATEGORIES', repositories.categories)
	inject('FETCH_PRODUCTS', repositories.products)
	inject('FETCH_LATEST_PRODUCTS', repositories.latestProducts)
	inject('FETCH_BESTSELLERS', repositories.bestsellers)
	inject('FETCH_SPECIAL_OFFERS', repositories.specialOffers)
	inject('FETCH_SHOP_SUGGESTIONS', repositories.shopSuggestion)
	inject('FETCH_INSTANT_SUGGESTIONS', repositories.instantSuggestion)
	// inject("FETCH_USER_ORDERS", repositories.userOrders)
	// inject("FETCH_PROVINCES", repositories.fetchProvinces)

	inject('SHOW_PRODUCT_DETAIL', repositories.showProductDetail)
	// inject("SHOW_PRODUCT_COLORS", repositories.showProductColors)
	// inject("SHOW_PROVINCES_CITIES", repositories.showProvincesCities)

	// inject("DELETE_FORM_CART", repositories.deleteFromCart)
}
