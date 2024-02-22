<template>
    <div class="main">
        <LayoutNav/>
        <router-view></router-view>
        <LayoutFooter/>
    </div>
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<style lang="scss">
.main{
    background: url('../../../public/bg2.jpg');
    background-size: cover;
}
</style>