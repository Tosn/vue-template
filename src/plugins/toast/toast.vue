<template>
  <transition name="slide-fade">
    <div class="toast-box" v-if="visible">
      <div class="toast-message">
        <div class="toast-inset-icon" v-if="iconClass">
          <span :class="['toast-icon', 'toast-icon-' + iconClass]"></span>
        </div>
        {{ message }}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      iconClass: '',
      message: '',
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .5s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
