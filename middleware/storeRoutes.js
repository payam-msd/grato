// import {sync} from '../functions/vuex-router-sync'
// export default ({route, app: {router, store, $cookies}}) => {
// 	const meta = route.meta
// 	sync(store, router, meta)
// 	let isFirstTransition = true
// 	router.beforeEach((to, from, next) => {
// 		const lastRouteName = $cookies.get('LS_ROUTE_KEY')
// 		const lastActivityAt = $cookies.get('LS_LAST_ACTIVITY_AT_KEY')

// 		const shouldRedirect = Boolean(
// 			lastRouteName && isFirstTransition && hasBeenRecentlyActive,
// 		)
// 		const MAX_TIME_TO_RETURN = 10 * 1000
// 		const hasBeenRecentlyActive = Boolean(
// 			lastActivityAt &&
// 				Date.now() - Number(lastActivityAt) < MAX_TIME_TO_RETURN,
// 		)

// 		if (shouldRedirect) next({name: lastRouteName})
// 		else next()
// 		isFirstTransition = false
// 	})

// 	router.afterEach((to, from, next) => {
// 		$cookies.set('LS_ROUTE_KEY', to.name)
// 		$cookies.set('LS_LAST_ACTIVITY_AT_KEY', Date.now())
// 	})
// }
