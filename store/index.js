export const state = () => ({
    cart: {
        inCart: undefined,
    },
    navbar: {
        data: undefined,
    },
})

export const mutations = {
    NAVBAR_DATA(state, payload) {
        state.navbar.data = payload
    },
}

export const actions = {}

export const getters = {
    navbarMenu(state) {
        var data = state.navbar.data
        if (data !== undefined) {
            return data.filter(item => item.title)
        }
    },

    navbarSubMenu(state) {
        var data = state.navbar.data
        if (data !== undefined) {
            return data.filter(item => item.children)
        }
    },

    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    userDetail(state) {
        return state.auth.user
    },
}

// import {sum_of_orders} from "../functions/calculatePrice"

// const state = () => ({
//     // * Product Data stores here
//     productData: null,
//     latestProductData: null,
//     bestsellerProductData: null,
//     // * Product selected for purchase
//     inCart: null,
//     ordersList: [],
//     orderDetails: [],
//     sumOfList: 0,
//     // * Error code are all stored here
//     userErrorCode: null,
//     // * Cart Sidebar and associated content is here
//     sidebarOpen: false,
//     sidebarContent: null,
//     // * List of cities and provinces are here
//     provinces: null,
// })
// const getters = {
//     isAuthenticated(state) {
//         return state.auth.loggedIn
//     },
//     loggedInUser(state) {
//         return state.auth.user
//     },
//     userErrorCode(state) {
//         return state.userErrorCode
//     },
// }

// const mutations = {
//     //  * Handling User Errors
//     setUserErrorCode(state, payload) {
//         state.userErrorCode = payload
//     },
//     setGreeting(state, payload) {
//         state.userErrorCode = payload
//     },
//     // * Req Page Data
//     setNavCategories(state, payload) {
//         state.navCategories = payload
//     },
//     setCardsData(state, payload) {
//         state.productData = payload
//     },
//     setBestsellerProductData(state, payload) {
//         state.bestsellerProductData = payload
//     },
//     setLatestProductData(state, payload) {
//         state.latestProductData = payload
//     },
//     setProvinces(state, payload) {
//         state.provinces = payload
//     },
//     setSidebar(state) {
//         state.sidebarOpen = !state.sidebarOpen
//     },
//     setSidebarContent(state, component) {
//         state.sidebarContent = component
//     },
//     setLatestCartInfo(state, payload) {
//         state.orderDetails.push(payload)
//     },
//     setSumOfList(state, payload) {
//         state.sumOfList = payload.sum
//     },
//     setOrders(state, payload) {
//         state.ordersList = payload
//     },
//     setInCart(state, payload) {
//         state.inCart = payload
//     },
// }
// const actions = {
//     nuxtServerInit({dispatch}, {error}) {
//         return Promise.all([
//             dispatch("GetNavCategories"),
//             dispatch("GetCardsData"),
//             dispatch("GetLatestData"),
//             dispatch("GetBestSellersData"),
//             dispatch("GetProvinces"),
//         ]).then(
//             () => {
//                 console.log(`NuxtServerInit: Done ✔ !!!`)
//             },
//             e => {
//                 error({statusCode: e.code, message: e || e.message})
//             },
//         )
//     },

//     async GetNavCategories({commit}) {
//         const data = await this.$FETCH_NAVBAR.index()
//         commit("setNavCategories", data)
//     },

//     async GetCardsData({commit}) {
//         const data = await this.$FETCH_PRODUCTS.index()
//         commit("setCardsData", data)
//     },

//     async GetLatestData({commit}) {
//         const data = await this.$FETCH_LATEST_PRODUCTS.index()
//         commit("setLatestProductData", data)
//     },

//     async GetBestSellersData({commit}) {
//         const data = await this.$FETCH_BESTSELLERS.index()
//         commit("setBestsellerProductData", data)
//     },

//     async GetProvinces({commit}) {
//         const data = await this.$FETCH_PROVINCES.index()
//         commit("setProvinces", data)
//     },

//     async UpdateCart({dispatch}, product_detail) {
//         const {itemID, quantity} = product_detail
//         const data = {
//             order_items: [
//                 {
//                     item_id: itemID,
//                     quantity,
//                 },
//             ],
//         }
//         await this.$ADD_TO_CART.post(data).then(() => {
//             dispatch("GetCartData")
//         })
//     },

//     async GetCartData({commit}) {
//         const {
//             cart_items: orders_list = {},
//             items_count: count = {},
//         } = await this.$FETCH_CART_DATA.index()

//         commit("setOrders", orders_list)
//         commit("setSumOfList", {sum: sum_of_orders(orders_list)})
//         commit("setInCart", count)
//     },

//     async RemoveFromCart(cxt, product_detail) {
//         const {productID, itemID} = product_detail
//         const required_details = {
//             params: [
//                 {
//                     item_id: itemID,
//                     quantity: 1,
//                 },
//             ],
//         }
//         await this.$DELETE_FORM_CART.delete(productID, required_details)
//     },

//     // * This part handles the sidebar
//     toggleSidebar({commit}, {component}) {
//         commit("setSidebar")
//         commit("setSidebarContent", component)
//     },

//     toggle({commit}) {
//         commit("setSidebar")
//     },
// }
// export const strict = false
// export default {
//     state,
//     getters,
//     actions,
//     mutations,
// }
