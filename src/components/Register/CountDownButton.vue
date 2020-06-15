<template>
  <el-button @click="getCode()" :disabled="countInfo.countState">{{countInfo.countState ? countInfo.countText : (text || normalText)}}</el-button>
</template>

<script>
import { CountDown } from '@/mixins/RegMixin.js'
export default {
  mixins: [CountDown],
  props: {
    text: {
      type: String,
      default: ''
    },
    countText: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      normalText: '获取验证码'
    }
  },
  methods: {
    getCode () {
      // todo axios get
      this.countDown(this.time, this.countText)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
