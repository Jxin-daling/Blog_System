<template>
  <div class="container">
    <div class="container_detail">
      <el-card class="card_detail" v-for="item in datainfo" :key="item.aid">
            <div class="detail_back" @click="router.back()">⬅返回</div>
            <div class="detail_title">
              <h2>{{ item.title }}</h2>
            </div>
            <div class="detail_time">发布时间：{{ item.create_time }}--{{ item.category }}</div>
            <hr style="margin: 10px 0 10px 0;">
            <div class="detail_bannerimg">
              <img :src="item.bannerimgurl" alt="没有图片哦">
            </div>
            <div v-html="item.content" class="detail_content"></div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { getArticleDetailApi } from '@/apis/detail'
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const datainfo = ref()

onMounted(()=>{
  getArticleDetailApi(route.params).then(res=>{
    datainfo.value = res.msg
  })
})
</script>

<style lang="scss">
.container_detail{
  display: flex;
  justify-content: center;
  height: 100vh;

  .card_detail{
    width: 80vw;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: auto;

    .detail_back{
      font-size: 20px;
      cursor: pointer;
    }

    .detail_title{
      text-align: center;
    }

    .detail_time{
      text-align: center;
      color: gray;
    }

    .detail_bannerimg{
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

        img{
          display: block;
          width: 80%;
          height: 80%;
        }
    }
  }
}
</style>