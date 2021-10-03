import ClickOutSide from 'vue-click-outside'

export default {
  install(Vue) {
    Vue.directive('click-outside', ClickOutSide)

    Vue.directive('focus', {
      inserted(el, binding, vnode) {
        console.log(el, binding, vnode)
        el.focus()
        // console.log()
        // if (typeof binding.value === 'function') {
        //   binding.value(el)
        // }
      },
    })
  },
}
