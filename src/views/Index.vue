<template>
  <div>
    {{ruleForm}}
    {{countInfo}}
    {{'1234567890' | tl(3, -2, true, 10)}}
    <el-button @click="istake = !istake">脱敏切换</el-button>
    {{'1234567890' | tl(4, 6, istake)}}
    <p>filter: {{userInfo && userInfo.username | bl}}</p>
    <h3>1231<svg-icon @click="$router.go(-1)" iconClass="arrow-left"></svg-icon></h3>
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
      <x-input label="活动名称" prop="name" v-model="ruleForm.name" placeholder="请输入活动名称"></x-input>
      <x-select label="活动区域" prop="region" v-model="ruleForm.region" placeholder="请选择活动区域" :options=options></x-select>
      <el-button @click="submitForm('ruleForm')">submit</el-button>
      <el-button @click="resetForm('ruleForm')">reset</el-button>
      <count-down-button :time="20" text="获取手机验证码" countText="还有多少 s结束"></count-down-button>
      <el-button @click="showToast">toast</el-button>
    </el-form>

  </div>
</template>

<script>
import FormMixin from '@/mixins/FormMixin'
import { CountDown } from '@/mixins/RegMixin'
import CountDownButton from '@/components/Register/CountDownButton'
import { msisdn } from '@/utils/validate'
export default {
  mixins: [FormMixin, CountDown],
  components: {
    CountDownButton
  },
  data () {
    return {
      istake: false,
      userInfo: null,
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
        name: msisdn,
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
    },
    showToast () {
      this.$toast(123123, {
        iconClass: 'success'
      }).then(() => {
        console.log('toast remove')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
