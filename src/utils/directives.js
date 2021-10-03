import ClickOutSide from 'vue-click-outside'

export default {
  install(Vue) {
    Vue.directive('click-outside', ClickOutSide)

    Vue.directive('addclass', {
      inserted(el, binding) {
      // inserted(el, binding, vnode, oldVnode) {
        // console.log('inserted', el, binding, vnode, oldVnode)
        setTimeout(() => {
          if (typeof binding.value === 'string') {
            el.classList.add(binding.value)
          } else if (typeof binding.value === 'function') {
            binding.value(el)
          }
        }, 100)
      },
    })
  },
}
