<template>
  <div class="slider_container">
      <el-scrollbar>
        <el-menu
          background-color="black"
          text-color="white"
          :default-active=route.path
          > 
          <Menu :routerlist="routerlist.adminroutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import routerStore from '@/stores/routerStore'
import { useRoute } from 'vue-router';
const route = useRoute()
const routerlist = routerStore()
</script>

<style lang="scss">
.slider_container{
  height: 100vh;
}
</style>@/stores/router@/stores/routerStore