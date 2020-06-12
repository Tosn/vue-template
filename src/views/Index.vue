<template>
  <div>
    {{ruleForm}}
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
      <x-input label="活动名称" prop="name" v-model="ruleForm.name" placeholder="请输入活动名称"></x-input>
      <x-select label="活动区域" prop="region" v-model="ruleForm.region" placeholder="请选择活动区域" :options=options></x-select>
      <el-button @click="submitForm('ruleForm')">submit</el-button>
      <el-button @click="resetForm('ruleForm')">reset</el-button>
    </el-form>
  </div>
</template>

<script>
import FormMixin from '@/mixins/FormMixin'
export default {
  mixins: [FormMixin],
  data () {
    return {
      options: [
        {
          label: 'AA',
          value: '1'
        },
        {
          label: 'BB',
          value: '2'
        }
      ],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // this.$axios.post('/123123')
  },
  methods: {
    submitForm () {
      this.validateForm('ruleForm', 'ruleForm')
        .then(data => {
          console.log(data)
        })
        .catch(() => {
          console.log('error')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
