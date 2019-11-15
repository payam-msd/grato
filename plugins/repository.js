import createRepository from "~/functions/repository.js"
export default (ctx, inject) => {
    const repositoryWithAxios = createRepository(ctx.$axios)
    const repositories = {
        //*  Post
        createUser: repositoryWithAxios("users"),
        addToCart: repositoryWithAxios("user/self/cart/items"),

        //* Get
        fetchNavbar: repositoryWithAxios("categories"),
        fetchProducts: repositoryWithAxios("products"),
        fetchLatestProducts: repositoryWithAxios("products/new"),
        fetchBestSellers: repositoryWithAxios("products/bestsellers"),
        fetchProductOption: repositoryWithAxios("options"),
        fetchCartData: repositoryWithAxios("user/self/cart"),
        fetchProvinces: repositoryWithAxios("provinces"),

        //* Show   |   they receives an ID. more on => ~/api/repository
        showProductDetail: repositoryWithAxios("products"),
        showProductColors: repositoryWithAxios("options"),
        showProvincesCities: repositoryWithAxios("cities"),

        //* Delete  |   they receives an ID. more on => ~/api/repository
        deleteFromCart: repositoryWithAxios("user/self/cart/items"),
    }

    inject("ADD_USER", repositories.createUser)
    inject("ADD_TO_CART", repositories.addToCart)
    inject("FETCH_NAVBAR", repositories.fetchNavbar)
    inject("FETCH_PRODUCTS", repositories.fetchProducts)
    inject("FETCH_LATEST_PRODUCTS", repositories.fetchLatestProducts)
    inject("FETCH_BESTSELLERS", repositories.fetchBestSellers)
    inject("FETCH_CART_DATA", repositories.fetchCartData)
    inject("FETCH_PROVINCES", repositories.fetchProvinces)
    inject("SHOW_PRODUCT_DETAIL", repositories.showProductDetail)
    inject("SHOW_PRODUCT_COLORS", repositories.showProductColors)
    inject("SHOW_PROVINCES_CITIES", repositories.showProvincesCities)
    inject("DELETE_FORM_CART", repositories.deleteFromCart)
}
