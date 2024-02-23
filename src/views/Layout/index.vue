<template>
    <div class="container_index">
        <Transition name="start" v-show="isshow">
            <LayoutStartVue @changehandler="changeshow"/>
        </Transition>

        <Transition name="main" v-show="!isshow">
            <div class="main">
                <LayoutNav @changehandler="changeshow"/>
                <router-view></router-view>
                <LayoutFooter/>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutStartVue from './components/LayoutStart.vue';
const isshow = ref(true)
const changeshow = ()=>{
    isshow.value = !isshow.value
    console.log("事件触发",isshow.value);
}
</script>

<style lang="scss">
.container_index{
    font-family: cute;
    height: 100%;
    overflow: hidden;

    .main-enter-from{
        transform: translateY(0);
    }
    
    .main-enter-to{
        transform: translateY(-100vh);
    }

    .main-leave-from{
        transform: translateY(-100vh);
    }
    
    .main-leave-to{
        transform: translateY(0);
    }

    .start-enter-active,
    .start-leave-active,
    .main-enter-active,
    .main-leave-active{
        transition: all 2s ease;
    }

    .main{
        background: url('../../../public/bg2.jpg');
        background-size: cover;
    }
}
</style>