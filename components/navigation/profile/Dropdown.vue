<template>
    <Wrapper class="z-30">
        <button class="w-16 p-2 cursor-pointer focus:outline-none">
            <UserIcon
                class="inline w-7 text-gray-700 hover:text-black"
                stroke-width="1.8"
            />
            <ChevronBottomIcon
                class="inline text-gray-700 w-3 mt-1"
                stroke-width="3"
            />
        </button>

        <Item class="relative">
            <ul
                class="w-56 absolute border border-gray-400 bg-white rounded shadow-2 xl mt-5 left-0"
            >
                <ItemDetail>
                    <li class="hover:bg-gray-200 cursor-pointer">
                        <nuxt-link
                            to="/auth/user"
                            class="mt-2 mr-2 inline-flex items-center justify-center pointer-cursor"
                        >
                            <img
                                class="rounded-full w-8 h-8 border-transparent hover:border-indigo-400"
                                src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
                                alt
                            />
                            <p class="text-sm w-full text-gray-darker pr-2">
                                کاربر جدید
                            </p>
                        </nuxt-link>
                    </li>
                </ItemDetail>
                <ItemDetail>
                    <li
                        class="hover:bg-gray-200 cursor-pointer p-4 flex items-center"
                    >
                        <BagIcon
                            height="28"
                            width="28"
                            class="text-gray-700 inline"
                        />
                        <nuxt-link
                            to="/profile"
                            class="text-sm w-full text-gray-darker px-3"
                            >سفارش های من</nuxt-link
                        >
                    </li>
                </ItemDetail>
                <div class="h-px mx-3 bg-gray-400"></div>
                <ItemDetail>
                    <li
                        class="hover:bg-gray-200 cursor-pointer p-4 flex items-center"
                    >
                        <ExportIcon
                            height="28"
                            width="28"
                            class="text-gray-700"
                        />
                        <a
                            class="text-sm w-full text-gray-darker px-3"
                            @click.once="$auth.logout()"
                            >خروج از حساب کاربری</a
                        >
                    </li>
                </ItemDetail>
            </ul>
        </Item>
    </Wrapper>
</template>

<script>
import {mapGetters} from "vuex"
import Wrapper from "~/components/modules/profile/Wrapper"
import ItemDetail from "~/components/modules/profile/ItemDetail"
import Item from "~/components/modules/profile/Item"
import ChevronBottomIcon from "~/assets/svg/icons/chevron-bottom.svg"
import UserIcon from "~/assets/svg/icons/user.svg"
import BagIcon from "~/assets/svg/icons/bag.svg"
import ExportIcon from "~/assets/svg/icons/export.svg"
export default {
    components: {
        Wrapper,
        Item,
        ItemDetail,
        ChevronBottomIcon,
        UserIcon,
        ExportIcon,
        BagIcon,
    },

    computed: {
        ...mapGetters(["isAuthenticated"]),
    },
}
</script>

<style scoped></style>
