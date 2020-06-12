import '@/plugins/axios'
const axios = window.axios
const api = {
  login: '/api/login',
  loginOut: '/api/loginOut',
  getUserInfo: '/api/getUserInfo'
}

const LOGIN = (data) => {
  return axios.post(api.login, data)
}

const LOGIN_OUT = () => {
  return axios.post(api.loginOut)
}

const GET_USER_INFO = (data) => {
  return axios.post(api.getUserInfo)
}

export {
  LOGIN,
  LOGIN_OUT,
  GET_USER_INFO
}
