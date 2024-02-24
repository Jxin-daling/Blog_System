<template>
    <template v-for="(item,index) in routerlist" :key="index">
        <el-menu-item v-if="!item.children&&!item.meta.hidden" :index="item.path" @click="goRoute">
            <template #title>
                {{ item.meta?.title }}
            </template>
        </el-menu-item>
        <el-menu-item v-if="item.children&&item.children.length==1" :index="item.path" @click="goRoute">
            <template #title>
                {{ item.meta?.title }}
            </template>
        </el-menu-item>

        <el-sub-menu v-if="item.children&&item.children.length>1&&!item.meta.hidden" :index="item.path">
            <template #title>
                {{ item.meta?.title }}
            </template>
            <Menu :routerlist="item.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<script setup>
import router from '@/router';
defineProps(['routerlist'])
const goRoute = (vc)=>{
    console.log(vc.index);
    router.push(vc.index)
}
</script>

<style>

</style>