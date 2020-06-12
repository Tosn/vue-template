<template>
  <el-form-item :prop="prop" :label="label" :class="{'el-form-empty' : inputVal.trim() == ''}">
    <el-input v-bind="$attrs" v-on="$listeners" :value="inputVal"  @input="backValue">
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'x-input',
  props: {
    label: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    },
    prop: {
      default: '',
      type: String
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: {
      handler: function () {
        this.initVal()
      },
      immediate: true
    }
  },
  data () {
    return {
      inputVal: ''
    }
  },
  methods: {
    initVal () {
      this.inputVal = this.value
    },
    backValue () {
      const text = event.target.value
      this.$emit('change', text)
    }
  }
}
</script>

<style lang="scss">

</style>
