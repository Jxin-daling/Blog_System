<template>
    <div class="container_admin">
        <div class="admin_slider">
            <MenuSlider/>
        </div>
        <div class="admin_tabbar">
            <MenuNav/>
        </div>
        <div class="admin_main">
            <AdminMain/>
        </div>
    </div>
</template>

<script setup>
import MenuSlider from './components/AdminSlider.vue';
import AdminMain from './components/AdminMain.vue';
import MenuNav from './components/AdminNav.vue';


</script>

<style lang="scss">
.container_admin{
    width: 100%;
    height: 100vh;

    .admin_slider{
        width: 20vw;
        background-color: black;
        height: 100vh;
    }

    .admin_tabbar{
        width: calc(100% - 20vw);
        height: 15vh;
        position: fixed;
        left: 20vw;
        top: 0;
    }

    .admin_main{
        width: calc(100% - 20vw);
        height: calc(100vh - 7vh);
        position: absolute;
        left: 20vw;
        top: 7vh;
        overflow: scroll;
    }
}
</style>