
const version = '0.1.20'
const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.use(require('vc-popup-base'))
  require('../../src/components/popup-picker')
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version
}
