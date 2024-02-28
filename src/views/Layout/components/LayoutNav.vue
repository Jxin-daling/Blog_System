<template>
    <div class="container_nav">
        <el-row class="nav">
            <el-col :span="2" style="padding-left:20px;"><h3 style="display:inline-block;">J</h3><span>xin</span></el-col>
            <el-col :span="2" @click="down" class="downarrow">⬇</el-col>
            <template v-for="(item,index) in routerlist.webroutes" :key="index" >
                <el-col :span="4" class="nav_active" v-if="!item.meta.hidden">
                    <router-link :to="`/`+item.path">{{ item.meta.title }}</router-link>
                </el-col>
            </template>
            </el-row>
    </div>
</template>

<script setup>
import routerStore from "@/stores/routerStore";
const emit = defineEmits(['changehandler'])
const routerlist = routerStore()

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
</style>@/stores/router@/stores/routerStore