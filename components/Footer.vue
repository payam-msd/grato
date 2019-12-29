<template>
	<div class="bg-gray-100">
		<div
			class="flex flex-col lg:flex-row justify-between container mx-auto px-3 lg:px-6"
		>
			<div class="flex flex-initial justify-around pt-12 lg:pt-0">
				<ul class="lg:my-20">
					<h3 class="mb-6 text-black p-1">
						خدمات مشتریان
					</h3>

					<template v-for="(link, i) in colOne">
						<nuxt-link
							:key="i"
							:to="link.route"
							tag="li"
							class="text-gray-900 py-2"
						>
							<a class="  p-1">
								{{ link.name }}
							</a>
						</nuxt-link>
					</template>
				</ul>

				<ul class="lg:my-20 lg:mx-24">
					<h3 class="mb-6 text-black p-1">
						درباره فروشگاه گراتو
					</h3>
					<template v-for="(link, i) in colTwo">
						<nuxt-link
							:key="i"
							:to="link.route"
							tag="li"
							class="text-gray-900 py-2"
						>
							<a class=" p-1">
								{{ link.name }}
							</a>
						</nuxt-link>
					</template>
				</ul>
			</div>

			<div
				class="my-12 w-full lg:w-40 flex flex-col
                justify-center text-center"
			>
				<h1 class="text-green-800 font-dana-bold text-center">
					{{ 'گراتو' }}
				</h1>
				<span class="block text-center">{{ year }}</span>

				<ul
					class="w-1/3 lg:w-full flex justify-around items-center mx-auto pt-4"
				>
					<li v-for="(svg, i) in svgs" :key="i">
						<a :href="svg.link" target="_blank" rel="noopener noreferrer">
							<component :is="svg.icon" class="w-6 lg:w-8" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import facebook from '~/assets/svg/facebook.svg'
import instagram from '~/assets/svg/instagram.svg'
import twitter from '~/assets/svg/twitter.svg'
export default {
	data() {
		return {
			colOne: [
				{
					name: 'پاسخ به پرسش‌های متداول',
					route: '/',
				},
				{
					name: '  شرایط استفاده',
					route: '/',
				},
				{
					name: 'حریم خصوصی',
					route: '/',
				},
				{
					name: ' رویه‌های بازگرداندن کالا ',
					route: '/',
				},
				{
					name: 'گزارش باگ',
					route: '/',
				},
			],
			colTwo: [
				{
					name: 'فرصت های شغلی',
					route: '/',
				},
				{
					name: 'فروش در فروشگاه گراتو',
					route: '/',
				},
				{
					name: 'تماس با گراتو',
					route: '/',
				},
				{
					name: 'تیم گراتو',
					route: '/',
				},
				{
					name: 'داستان حضور گراتو',
					route: '/',
				},
			],
			svgs: [
				{
					icon: twitter,
					link: 'https://www.com',
				},
				{
					icon: instagram,
					link: 'https://www.com',
				},
				{
					icon: facebook,
					link: 'https://www.com',
				},
			],
		}
	},
	computed: {
		year() {
			return new Date().getFullYear()
		},
	},
}
</script>

<style scoped></style>
