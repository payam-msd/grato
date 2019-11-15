export const sync = function(store, router, meta, options) {
    let moduleName = (options || {}).moduleName || "route"

    store.registerModule(moduleName, {
        namespaced: true,
        state: cloneRoute(router.currentRoute),
        mutations: {
            ROUTE_CHANGED: function ROUTE_CHANGED(state, transition) {
                store.state[moduleName] = cloneRoute(
                    transition.to,
                    transition.from,
                    meta,
                )
            },
        },
    })

    let isTimeTraveling = false
    let currentPath

    // sync router on store change
    let storeUnwatch = store.watch(
        function(state) {
            return state[moduleName]
        },
        function(route) {
            let fullPath = route.fullPath
            if (fullPath === currentPath) {
                return
            }
            if (currentPath != null) {
                isTimeTraveling = true
                router.push(route)
            }
            currentPath = fullPath
        },
        {sync: true},
    )

    // sync store on router navigation
    let afterEachUnHook = router.afterEach(function(to, from, meta) {
        if (isTimeTraveling) {
            isTimeTraveling = false
            return
        }
        currentPath = to.fullPath
        store.commit(moduleName + "/ROUTE_CHANGED", {to: to, from: from, meta})
    })

    return function unsync() {
        // On unsync, remove router hook
        if (afterEachUnHook != null) {
            afterEachUnHook()
        }

        // On unsync, remove store watch
        if (storeUnwatch != null) {
            storeUnwatch()
        }

        // On unsync, unregister Module with store
        store.unregisterModule(moduleName)
    }
}

function cloneRoute(to, from, meta) {
    let clone = {
        name: to.name,
        path: to.path,
        hash: to.hash,
        query: to.query,
        params: to.params,
        fullPath: to.fullPath,
        meta,
    }
    if (from) {
        clone.from = cloneRoute(from, meta)
    }
    return Object.freeze(clone)
}
