export const msisdn = [
  {
    required: true,
    message: '请输入手机号码'
  },
  {
    pattern: /^\d{11}$/g,
    message: '请输入11位手机号码'
  }
]
