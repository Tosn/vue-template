<template>
  <div>
    <base-header></base-header>
    <transition name="fade-in">
      <router-view></router-view>
    </transition>
    <base-footer></base-footer>
  </div>
</template>

<script>
export default {
  components: {
    BaseHeader: () => import('./components/BaseHeader.vue'),
    BaseFooter: () => import('./components/BaseFooter.vue')
  }
}
</script>

<style lang="scss" scoped>

</style>
