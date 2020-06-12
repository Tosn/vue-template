export default {
  methods: {
    validateForm (formName, model) {
      return new Promise((resolve, reject) => {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (model) {
              resolve(this[model])
            } else {
              resolve()
            }
          } else {
            reject(new Error('validate error'))
          }
        })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
