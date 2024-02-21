<template>
    <div class="container">
        <el-row class="nav">
            <el-col :span="3">logo</el-col>
            <el-col :span="6"><input type="text" class="search"></el-col>
            <el-col :span="5">下拉按钮</el-col>
            <el-col v-for="(item,index) in list" :key="index" :span="2">
                <router-link :to="`${item.path}`">{{ item.pathname }}</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from "vue";

const list = ref([
    {path:'/',pathname:'主页'},
    {path:'/category',pathname:'分类'},
    {path:'/gallery',pathname:'画廊'},
    {path:'/message',pathname:'留言'},
    {path:'/about',pathname:'关于'}
])
</script>

<style lang="scss" scoped>
.container{
    height: 100%;
    background: rgba(1, 1, 1, 0.1);
    box-shadow: 0 5px 10px rgb(86, 68, 68);

    .nav{
        padding: 10px 0;
        font-size: 25px;

        .search{
            width: 80%;
            padding-left: 10px;
            border-radius: 10px;
            height: 80%;
        }
    }
}
</style>