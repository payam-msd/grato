<template>
	<div class="bg-rose-100">
		<div class="container mx-auto px-6 py-24">
			<h1 class="text-center">{{"ما را در اینستاگرام دنبال کنید"}}</h1>
			<ul class="flex flex-no-wrap">
				<template v-for="(post,i) in posts">
					<li
						class="bg-gray-200 bg-center w-full h-64"
						:key="i"
						:style="'backgroundImage: `url(${post.url})` '"
					></li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		posts: {
			type: Array,
			default: () => {},
		},
	},
}
</script>

<style scoped>
</style>