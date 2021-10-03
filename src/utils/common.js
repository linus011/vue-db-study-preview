export default {
  install(Vue) {
    if (this.installed) return

    this.installed = true
    Vue.prototype.$removeComma = this.removeComma
  },
  removeComma(val) {
    if (val === null || val === undefined) return ''
    return val.toString().replace(/,/gi, '')
  },
}
