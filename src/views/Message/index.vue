<template>
    <div class="container">
      <el-row>
            <el-col :span="5">
              <LeftItem/>
            </el-col>
          <el-col :span="14">
            <MidItem/>
          </el-col>
          <el-col :span="5">
            <RightItem/>
          </el-col>
      </el-row>
    </div>
</template>
  
<script setup>
import LeftItem from './components/LeftItem.vue';
import MidItem from './components/MidItem.vue';
import RightItem from './components/RightItem.vue';
import { useMessageStore } from '@/stores/message';
const messagestore = useMessageStore()
import { onMounted } from 'vue';
onMounted(()=>{
  messagestore.getmessagevisitor()
  messagestore.getmessagereply()
})
</script>

<style lang="scss">

</style>