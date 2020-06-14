import { login, loginOut, getUserInfo } from '@/api/user'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Vue from 'vue'
import { STORAGE_TIME } from '../../settings'
const state = {
  token: '',
  userInfo: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(res => {
          commit('SET_TOKEN', res.token)
          Vue.ls.set(ACCESS_TOKEN, res.token, STORAGE_TIME)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  loginOut ({ commit }) {
    return new Promise((resolve, reject) => {
      loginOut()
        .then(() => {
          Vue.ls.remove(ACCESS_TOKEN)
          commit('SET_TOKEN', '')
          commit('SET_USERINFO', null)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getUserInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((res) => {
          commit('SET_USERINFO', res.userInfo)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      Vue.ls.remove(ACCESS_TOKEN)
      resolve()
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
