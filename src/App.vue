<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <div class="divClass"></div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
}
</script>

<style lang="stylus">
// main.styl
@import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader
</style>
