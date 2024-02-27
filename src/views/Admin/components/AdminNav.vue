<template>
  <div class="admin_nav">
    <div class="nav_left">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item,index) in route.matched" :key="index" :to="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav_right">
      <el-button :icon="Refresh" circle @click="updateRefresh"></el-button>
    </div>
  </div>  
</template>

<script setup>
import {Refresh,ArrowRight} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import useSettingStore from '@/stores/setting';
const settingstore = useSettingStore()
const route = useRoute()

const updateRefresh = ()=>{
  settingstore.refresh = !settingstore.refresh
}
</script>

<style lang="scss">
.admin_nav{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .nav_left{
    display: flex;
    margin-left: 20px;
    margin-top: 10px;
  }

  .nav_right{
    margin-right: 20px;
  }
}
</style>