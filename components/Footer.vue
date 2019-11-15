<template>
    <div class="bg-gray-100 mt-20">
        <div class="container mx-auto">
            <div class="mx-8 flex justify-between">
                <div class="flex flex-initial">
                    <ul class="my-20 font-dana">
                        <h5 class="mb-6 text-xl text-black">
                            خدمات مشتریان
                        </h5>

                        <template v-for="(link, i) in colOne">
                            <nuxt-link
                                :key="i"
                                tag="li"
                                class="text-base text-gray-900 py-2"
                                :to="link.route"
                            >
                                <a>{{ link.name }}</a>
                            </nuxt-link>
                        </template>
                    </ul>

                    <ul class="my-20 font-dana mx-24">
                        <h5 class="mb-6 text-xl text-black">
                            درباره فروشگاه گراتو
                        </h5>
                        <template v-for="(link, i) in colTwo">
                            <nuxt-link
                                :key="i"
                                tag="li"
                                class="text-base text-gray-900 py-2"
                                :to="link.route"
                            >
                                <a>{{ link.name }}</a>
                            </nuxt-link>
                        </template>
                    </ul>
                </div>

                <div class="my-16 flex flex-1 justify-end">
                    <div class>
                        <div class="flex items-baseline justify-around">
                            <p class="text-4xl text-green-800 font-dana-bold">
                                {{ "گراتو" }}
                            </p>
                            <span class="block">{{ year }}</span>
                        </div>
                        <ul class="flex justify-end items-center py-16">
                            <li class="mx-3 w-10 h-10">
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <twitter />
                                </a>
                            </li>

                            <li class="mx-3 w-10 h-10">
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <instagram />
                                </a>
                            </li>
                            <li class="mx-2 w-10 h-10">
                                <a
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <facebook />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import facebook from "~/assets/svg/facebook.svg"
import instagram from "~/assets/svg/instagram.svg"
import twitter from "~/assets/svg/twitter.svg"
import tailwind from "~/assets/svg/tailwind.svg"
export default {
    components: {
        facebook,
        instagram,
        twitter,
        tailwind,
    },
    data() {
        return {
            colOne: [
                {
                    name: "پاسخ به پرسش‌های متداول",
                    route: "/",
                },
                {
                    name: " رویه‌های بازگرداندن کالا ",
                    route: "/",
                },
                {
                    name: "  شرایط استفاده",
                    route: "/",
                },
                {
                    name: "حریم خصوصی",
                    route: "/",
                },
                {
                    name: "گزارش باگ",
                    route: "/",
                },
            ],
            colTwo: [
                {
                    name: "فروش در فروشگاه گراتو",
                    route: "/",
                },
                {
                    name: "داستان حضور گراتو",
                    route: "/",
                },
                {
                    name: "تیم گراتو",
                    route: "/",
                },
                {
                    name: "فرصت های شغلی",
                    route: "/",
                },
                {
                    name: "تماس با گراتو",
                    route: "/",
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
