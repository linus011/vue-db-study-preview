import eventBus from '@/components/eventBus.vue'

export default {
  install(Vue) {
    if (this.installed) return

    this.installed = true
    Vue.prototype.$removeComma = this.removeComma
    Vue.prototype.$loading = this.loading
  },
  removeComma(val) {
    if (val === null || val === undefined) return ''
    return val.toString().replace(/,/gi, '')
  },
  loading(state = true) {
    if (state) {
      eventBus.$emit('loading-open')
    } else {
      eventBus.$emit('loading-close')
    }
  },
}
