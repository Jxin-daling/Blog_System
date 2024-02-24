<template>
    <el-scrollbar>
        <el-menu
        > 
          <Menu :routerlist="routerlist.adminroutes"></Menu>
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import routerStore from '@/stores/routerStore'
const routerlist = routerStore()

</script>

<style>

</style>