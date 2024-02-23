<template>
    <div class="container_nav">
        <el-row class="nav">
            <el-col :span="2">logo</el-col>
            <el-col :span="2" @click="down" class="downarrow">⬇</el-col>
            <el-col v-for="(item,index) in list" :key="index" :span="4" class="nav_active">
                <router-link :to="`${item.path}`">{{ item.pathname }}</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(['changehandler'])

const list = ref([
    {path:'/home',pathname:'主页'},
    {path:'/category',pathname:'分类'},
    {path:'/gallery',pathname:'画廊'},
    {path:'/message',pathname:'留言'},
    {path:'/about',pathname:'关于'}
])

const down = ()=>{
    emit('changehandler')
}
</script>

<style lang="scss" scoped>
.container_nav{
    height: 100%;
    background: rgba(1, 1, 1, 0.1);
    box-shadow: 0 5px 10px rgb(86, 68, 68);

    .nav{
        padding: 10px 0;
        font-size: 25px;     

        .downarrow{
            cursor: pointer;
        }

        .nav_active{
            position: relative;
            text-align: center;
        }

        .nav_active::before{
            position: absolute;
            content: '';
            left: 0;
            width: 10px;
            height: 100%;
            background-color: black;
        }

        .nav_active::after{
            position: absolute;
            content: '';
            right: 0;
            width: 10px;
            height: 100%;
            background-color: black;
        }

        .nav_active:has(.active){
            background:linear-gradient(90deg,white,transparent);
            border-radius: 10px;
        }

        .active{
            color: green;
        }

        .active::before{
            content: "";
            position: absolute;
            left: 50px;
            top: -10px;
            width: 100px;
            height: 50px;
            border: 3px solid rgba(1,1,1,0.6);
            border-radius: 90%;
        }
    }
}
</style>