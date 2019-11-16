<template>
    <div class="bg-gray-100 pt-10">
        <div class="container mx-auto">
            <div
                class="p-6 lg:p-0 lg:mx-8 flex flex-col lg:flex-row justify-between"
            >
                <div class="flex flex-initial pt-12 lg:pt-0">
                    <ul class="my-0 lg:my-20 w-48 text-right">
                        <h5 class="mb-6 text-xl text-black">
                            خدمات مشتریان
                        </h5>

                        <template v-for="(link, i) in colOne">
                            <nuxt-link
                                :key="i"
                                tag="li"
                                class="text-sm lg:text-base text-gray-900 py-2 "
                                :to="link.route"
                            >
                                <a>{{ link.name }}</a>
                            </nuxt-link>
                        </template>
                    </ul>

                    <ul class="my-0 lg:my-20 mx-0 lg:mx-24 w-48 text-right">
                        <h5 class="mb-6 text-xl text-black">
                            درباره فروشگاه گراتو
                        </h5>
                        <template v-for="(link, i) in colTwo">
                            <nuxt-link
                                :key="i"
                                tag="li"
                                class="text-sm lg:text-base text-gray-900 py-2"
                                :to="link.route"
                            >
                                <a>{{ link.name }}</a>
                            </nuxt-link>
                        </template>
                    </ul>
                </div>

                <div
                    class="my-12 w-full lg:w-32  lg:my-20 flex flex-col justify-center text-center lg:text-left lg:justify-start"
                >
                    <p
                        class="text-4xl text-green-800 font-dana-bold text-center"
                    >
                        {{ "گراتو" }}
                    </p>
                    <span class="block text-center">{{ year }}</span>

                    <ul
                        class="w-1/2 lg:w-full flex justify-around mx-auto lg:mx-0 items-center pt-10 lg:pt-16"
                    >
                        <li>
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <twitter class="w-8" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <instagram class="w-8" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <facebook class="w-7" />
                            </a>
                        </li>
                    </ul>
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
                    name: "  شرایط استفاده",
                    route: "/",
                },
                {
                    name: "حریم خصوصی",
                    route: "/",
                },
                {
                    name: " رویه‌های بازگرداندن کالا ",
                    route: "/",
                },
                {
                    name: "گزارش باگ",
                    route: "/",
                },
            ],
            colTwo: [
                {
                    name: "فرصت های شغلی",
                    route: "/",
                },
                {
                    name: "فروش در فروشگاه گراتو",
                    route: "/",
                },
                {
                    name: "تماس با گراتو",
                    route: "/",
                },
                {
                    name: "تیم گراتو",
                    route: "/",
                },
                {
                    name: "داستان حضور گراتو",
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
