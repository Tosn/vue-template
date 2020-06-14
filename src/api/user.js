import '@/plugins/axios'
const axios = window.axios
const api = {
  login: '/api/login',
  loginOut: '/api/loginOut',
  getUserInfo: '/api/getUserInfo'
}

const login = (data) => {
  return axios.post(api.login, data)
}

const loginOut = () => {
  return axios.post(api.loginOut)
}

const getUserInfo = (data) => {
  return axios.post(api.getUserInfo)
}

export {
  login,
  loginOut,
  getUserInfo
}
