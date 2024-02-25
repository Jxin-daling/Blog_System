<template>
    <div class="container_state">
        <el-row>
            <el-col :span="12">
                <el-card>
                    <template #header>
                        <h2 style="text-align: center;">访客总量</h2>
                    </template>
                    <div class="visitor">
                        <div class="visitor_left">今日访问量:111</div>
                        <div class="visitor_right">总访问量:12344</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <template #header>
                        <h2 style="text-align: center;">文章总量</h2>
                    </template>
                    <div class="visitor">
                        <div class="visitor_left">今日发文:111</div>
                        <div class="visitor_right">总发文数:12344</div>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="12">
                <div ref="myechartsA" style="width: 500px; height: 500px; border: 1px solid red;"></div>
            </el-col>
            <el-col :span="12">
                <div ref="myechartsB" style="width: 500px; height: 500px; border: 1px solid red;"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue';
let myechartsA = ref()
let myechartsB = ref()
onMounted(()=>{
  let myEchartsA = echarts.init(myechartsA.value)
  let myEchartsB = echarts.init(myechartsB.value)
  let data = ['星期一','星期二','星期三','星期四','星期五','星期六','星期天']
  let dataA = [300,320,120,400,250,480,432]
  let dataB = [534,332,756,312,183,456,777]
  let dataC = [636,520,423,425,247,745,132]
  let dataD = [863,645,311,317,654,867,785]
  let optionA = {
    title:{
      text:'访客数量',
    },
    legend:{
      orient:'verical'  //设置纵向
    },
    xAxis:{
      type:'category',
      data
    },
    yAxis:{
      type:'value'
    },
    tooltip:{},
    series:{
      name:'Week',
      type:'line',
      data:[300,200,300,250,200,150,100,150],
      smooth:true,  //开启过渡
      areaStyle:{},  //开启填充
      markPoint:{
        data:[
          {name:'最大值',type:'max'},
          {name:'最小值',type:'min'}
        ]
      }
    }
  }  

  let optionB = {
    title:{
      text:'文章分类',
    },
    legend:{
      orient:'verical'  //设置纵向
    },
    xAxis:{
      type:'category',
      data
    },
    yAxis:{
      type:'value'
    },
    tooltip:{},
    series:[
      {
        name:'美食',
        type:'line',
        data:dataA,
        stack:'num',
        areaStyle:{}
      },
      {
        name:'家电',
        type:'line',
        data:dataB,
        stack:'num',
        areaStyle:{}
      },
      {
        name:'日常',
        type:'line',
        data:dataC,
        stack:'num',
        areaStyle:{}
      },
      {
        name:'户外',
        type:'line',
        data:dataD,
        stack:'num',
        areaStyle:{}
      },
    ]
  }  
  myEchartsA.setOption(optionA)
  myEchartsB.setOption(optionB)
})
</script>

<style lang="scss">
.container_state{

    .visitor{
        display: flex;
        justify-content: space-evenly;
    }
}
</style>