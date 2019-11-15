<template>
    <Fragment>
        <Title>
            <a slot="title">
                {{ title1 }}
            </a>
            <Wrapper slot="wrapper">
                <Menu
                    slot="menu"
                    :items="navbarMenu"
                    @activateSubMenu="handleID"
                />

                <SubMenu :id="id" :items="navbarSubMenu" slot="subMenu" />
            </Wrapper>
        </Title>
    </Fragment>
</template>

<script>
import {mapGetters} from "vuex"
import {Fragment} from "vue-fragment"
import Wrapper from "~/components/modules/hoverDrop/Wrapper"
import Menu from "~/components/modules/hoverDrop/Menu"
import SubMenu from "~/components/modules/hoverDrop/SubMenu"
import Title from "~/components/modules/hoverDrop/Title"
export default {
    components: {
        Wrapper,
        Menu,
        SubMenu,
        Title,
        Fragment,
    },
    data() {
        return {
            title1: "دسته بندی برند ها",
            title2: "دسته بندی لوازم جانبی",
            id: 0,
        }
    },
    computed: {
        ...mapGetters(["navbarMenu", "navbarSubMenu"]),
    },

    methods: {
        handleID(id) {
            this.id = id
        },
    },
}
</script>

<style scoped></style>
