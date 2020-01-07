<template>
	<div class="bg-rose-100 py-64 lg:py-0" style="height: 60vh">
		<div class="container mx-auto px-6 py-24">
			<h2 class="text-center">{{ 'ما را در اینستاگرام دنبال کنید' }}</h2>
			<ul class="flex flex-no-wrap">
				<template v-for="(post, i) in posts">
					<li
						:key="i"
						:style="'backgroundImage: `url(${post.url})` '"
						class="bg-gray-200 bg-center w-full h-64"
					/>
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

<style scoped></style>
