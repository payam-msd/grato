export default $axios => resource => ({
	create(payload) {
		return $axios.$post(`${resource}`, payload)
	},

	post(payload) {
		return $axios.$post(`${resource}`, payload)
	},

	index() {
		return $axios.$get(`${resource}`)
	},

	show(id) {
		return $axios.$get(`${resource}/${id}`)
	},

	showCities(id) {
		return $axios.$get(`/provinces/${id}/${resource}`)
	},

	update(payload) {
		return $axios.$put(`${resource}`, payload)
	},

	delete(id, params) {
		return $axios.$delete(`${resource}/${id}`, params)
	},
})
