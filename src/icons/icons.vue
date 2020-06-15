<template>
  <div>
    <ul>
      <li v-for="icon in iconsList" :key="icon">
        <svg-icon :iconClass="icon"></svg-icon>
        <small>iconClass:</small>
        {{ icon }}
      </li>
    </ul>
  </div>
</template>

<script>
import icons from './index'
export default {
  data () {
    return {
      icons: icons
    }
  },
  computed: {
    iconsList () {
      const _iconList = []
      this.icons.forEach(item => {
        _iconList.push(item.replace('./', '').replace('.svg', ''))
      })

      return _iconList
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  font-size: 20px;

  small {
    color: #999;
    margin: 6px;
  }
  &:hover {
    font-size: 50px;
  }
}
</style>
