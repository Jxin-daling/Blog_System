<template>
    <div class="container">
        <el-row class="footer">
          
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
    height: 15vh;
    background: rgba(1, 1, 1, 0.5);

    .footer{
        
    }
}
</style>