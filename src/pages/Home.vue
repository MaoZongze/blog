<template>
    <div class="home">
        <div class="divClass"></div>
        <div class="divClass"></div>
        <div class="divClass"></div>
        <div class="divClass"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.home 
    flex-wrap row nowrap
    width 100vw
    height 100vh
    display flex
    justify-content flex-end
    align-items flex-start
    .divClass 
        width 5vw
        height 5vh
        background red
</style>
