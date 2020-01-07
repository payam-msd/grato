<template>
	<div v-show="breadcrumb" class="container mx-auto px-1">
		<div class="w-full py-4 px-8">
			<nav aria-label="breadcrumbs">
				<ul class="flex  justify-start items-center">
					<nuxt-link class="text-gray-700" to="/">
						{{ 'فروشگاه اینترنتی گراتو ' }}
					</nuxt-link>
					<IconLeft class="inline w-2.2" transform="rotate(90, 0, 0)" />
					<li
						v-for="(item, i) in breadcrumb"
						:key="i"
						:class="item.classes"
						class="text-gray-700 "
					>
						<nuxt-link :to="item.path">
							{{ item.name }}
						</nuxt-link>
						<IconLeft class="inline w-2.2" transform="rotate(90, 0, 0)" />
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import IconLeft from '~/assets/svg/icons/icon-cheveron-down.svg'
export default {
	components: {
		IconLeft,
	},
	computed: {
		breadcrumb() {
			return this.$nuxt.$options.context.meta
		},
		// 	crumbs() {
		// 		const crumbs = []
		// 		this.$route.matched.map((item, i, {length}) => {
		// 			const crumb = {}
		// 			crumb.path = item.path
		// 			crumb.name = item.name
		// 			// is last item?
		// 			if (i === length - 1) {
		// 				// is param route? .../.../:id
		// 				if (item.regex.keys.length > 0) {
		// 					crumbs.push({
		// 						path: item.path.replace(/\/:[^/:]*$/, ''),
		// 						name: item.name.replace(/-[^-]*$/, ''),
		// 					})
		// 					crumb.path = this.$route.path
		// 					crumb.name = this.$route.name || [crumb.path.match(/[^/]*$/)[0]]
		// 				}
		// 				crumb.classes = 'text-black text-lg'
		// 			}
		// 			crumbs.push(crumb)
		// 		})
		// 		return crumbs
		// 	},
	},
	watch: {
		$route: 'breadcrumb',
	},
}
</script>

<style scoped></style>
