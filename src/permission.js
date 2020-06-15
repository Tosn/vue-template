import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import { ACCESS_TOKEN, INDEX_MAIN_PATH, LOGIN_PATH } from '@/store/mutation-types'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getPageTitle } from '@/utils/getPageInfo'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.matched)
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === LOGIN_PATH) {
      next({ path: INDEX_MAIN_PATH })
      NProgress.done()
    } else {
      store.dispatch('user/getUserInfo')
        .then(() => {
          next()
        })
        .catch(() => {
          store.dispatch('user/resetToken')
            .then(() => {
              next({
                path: LOGIN_PATH,
                query: {
                  redirect: to.path
                }
              })
              NProgress.done()
            })
        })
    }
  } else {
    if (to.matched.some(record => record.meta.whiteList)) {
      next()
    } else {
      next({
        path: LOGIN_PATH,
        query: {
          redirect: to.path
        }
      })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
