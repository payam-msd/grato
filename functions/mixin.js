export const breadcrumb = {
	beforeCreate() {
		const {breadcrumbs} = this.$options
		if (breadcrumbs && typeof breadcrumbs === 'function') {
			console.log(`${JSON.stringify(breadcrumbs())}`)
			Object.assign(this, breadcrumbs.apply(this))
		} else if (breadcrumbs && typeof breadcrumbs === 'object') {
			Object.assign(this, breadcrumbs)
		}
	},
}
