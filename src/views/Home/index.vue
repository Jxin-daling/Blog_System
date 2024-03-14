<template>
  <div class="container">
    <el-row>
        <el-col :span="19">
          <LeftItem/>
        </el-col>
        <el-col :span="5">
          <RightItem/>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>
import LeftItem from './components/LeftItem.vue';
import RightItem from './components/RightItem.vue';
import { useArticleStore } from '@/stores/article';
const articlestore = useArticleStore()
import { onMounted } from 'vue';
onMounted(()=>{
  articlestore.getarticle()
})
</script>

<style lang="scss">

</style>