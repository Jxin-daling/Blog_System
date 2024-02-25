<template>
  <div class="admin_nav">
    <div class="nav_left">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item,index) in route.matched" :key="index" :to="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>  
</template>

<script setup>
import {Refresh,ArrowRight} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style lang="scss">
.admin_nav{
  width: calc(100% - 20vw);
  height: 7vh;
  display: flex;
  justify-content: space-between;

  .nav_left{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
}
</style>