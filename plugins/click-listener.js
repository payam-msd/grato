import Vue from "vue"
Vue.directive("click-listener", {
    update(el, binding, vnode) {
        el.handleClickListener = function(event) {
            if (!(el === event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event)
            }
        }
        document.body.addEventListener("click", el.handleClickListener)
    },
    unbind(el) {
        document.body.removeEventListener("click", el.handleClickListener)
    },
})
