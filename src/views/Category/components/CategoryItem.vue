<template>
    <div class="container">
        <div class="container_category">
            <el-card v-for="(item,index) in categorylist" :key="index" class="card">
                <div class="card_show">
                    <img :src="item.imgurl" class="image">
                    <div class="card_tag">日常</div>
                </div>
                <div class="card_content">共有<span>33</span>篇文章</div>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const categorylist = ref([
    {imgurl:'../../../../public/bg1.png',name:'jump'},
    {imgurl:'../../../../public/bg2.jpg',name:'day'},
    {imgurl:'../../../../public/bg3.jpg',name:'daofeng'},
    {imgurl:'../../../../public/bg4.jpg',name:'nep'},
    {imgurl:'../../../../public/bg1.png',name:'jump'},
    {imgurl:'../../../../public/bg2.jpg',name:'day'},
    {imgurl:'../../../../public/bg3.jpg',name:'daofeng'},
    {imgurl:'../../../../public/bg4.jpg',name:'nep'},
])
</script>

<style lang="scss">
.container_category{
    background: rgba(1,1,1,0.3);
    border-radius: 20px;
    margin: 0 10vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .card{
        margin: 10px;
        width: 30vw;
        height: 200px;
        position: relative;

            .card_show{
                position: relative;
                width: 100%;
                height: 150px;

                .image{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

            .card_tag{
                position: absolute;
                width: 100%;
                height: 40px;
                line-height: 37.5px;
                text-indent: 20px;
                bottom: 0;
                background: rgba(1,1,1,0.6);
                color: white;
            }
        }
    }

    .card:hover{
        box-shadow: 0 0 10px gray,
                    0 0 20px gray,
                    0 0 30px gray;
    }
}
</style>