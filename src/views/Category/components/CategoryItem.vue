<template>
    <div class="container">
        <div class="container_category">
            <router-link :to="`/categoryitem/`+item.categoryname" v-for="(item,index) in categorystore.categorylist.msg" :key="index">
                <el-card class="card">
                    <div class="card_show">
                        <img :src="item.imgurl" class="image">
                        <div class="card_tag">{{ item.categoryname }}</div>
                    </div>
                    <div class="card_content">共有<span>{{ item.aclcount }}</span>篇文章</div>
                </el-card>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/category';
const categorystore = useCategoryStore()
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