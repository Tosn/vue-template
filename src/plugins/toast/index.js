import ToastComponent from './toast.vue'

const Toast = {}
Toast.install = (Vue, options) => {
  let opt = {
    duration: 3000
  }

  opt = Object.assign({}, opt, options)
  Vue.prototype.$toast = (message, options) => {
    return new Promise(resolve => {
      opt = Object.assign({}, opt, options)
      const ToastContainer = Vue.extend(ToastComponent)
      const $instance = new ToastContainer().$mount()
      $instance.message = message
      $instance.visible = true
      $instance.iconClass = opt.iconClass || ''
      document.body.appendChild($instance.$el)
      setTimeout(() => {
        // 清除dom
        $instance.visible = false
        setTimeout(() => {
          document.body.removeChild($instance.$el)
          // 释放内存
          $instance.$destroy()
          resolve()
        }, 10)
      }, opt.duration)
    })
  }
}

export default Toast
