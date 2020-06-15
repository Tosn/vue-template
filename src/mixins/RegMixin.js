// 倒计时
export const CountDown = {
  data () {
    return {
      countInfo: {
        countTime: 60, // 倒计时默认时间
        countText: '剩余 秒',
        countState: false // 倒计时状态  是否进行中
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    countDown (time, text) {
      return new Promise(resolve => {
        const countInfo = this.$options.data().countInfo
        let _time = +time || countInfo.countTime
        const _text = text || countInfo.countText
        this.countInfo.sendState = true
        this.countInfo.countState = true
        const reduce = () => {
          if (/\s+/g.test(_text)) {
            this.countInfo.countText = _text.replace(/\s+/g, _time)
          } else {
            this.countInfo.countText = _text + _time
          }
          _time--
        }
        reduce()
        this.interval = setInterval(() => {
          if (_time >= 1) {
            reduce()
          } else {
            clearInterval(this.interval)
            this.countInfo.countState = false
            this.countInfo.countText = _text
            this.countInfo.countTime = _time
            resolve()
          }
        }, 1000)
      })
    }
  }
}
