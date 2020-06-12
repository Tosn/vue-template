<template>
  <el-form-item :prop="prop" :label="label" :class="{'el-form-empty' : inputVal.trim() == ''}">
    <el-select :value="inputVal" @change="backValue" v-bind="$attrs" v-on="$listeners">
      <el-option v-for="item in options" :key="item.value + Math.random()" :value="item.value" :label="item.label"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'x-select',
  props: {
    label: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: [String]
    },
    prop: {
      default: '',
      type: String
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
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
