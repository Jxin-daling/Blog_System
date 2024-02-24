<template>
    <div class="container_admin">
        <el-row>
            <el-col :span="5">
                <MenuSlider/>
            </el-col>
            <el-col :span="19">
                <MenuNav/>
                <AdminMain/>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import MenuSlider from './components/AdminSlider.vue';
import AdminMain from './components/AdminMain.vue';
import MenuNav from './components/AdminNav.vue';


</script>

<style lang="scss">
.container_admin{
    width: 100vw;
    height: 100vh;
    background-color:gray;
    overflow: hidden;
}
</style>