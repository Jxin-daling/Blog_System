<template>
    <div class="home_container_mid">
        <router-link 
            :to="`/detail/`+item.aid"
            v-for="(item,index) in articlestore.articlelist" 
            :key="index"
            v-show="articlestore.showPageSize(index)"
            >
            <el-card class="box-card">
                <div class="card_container">
                    <div class="left">
                        <img :src="item.bannerimgurl" alt="没有图片">
                    </div>
                    <div class="right">
                        <h2>{{ item.title }}</h2>
                        <el-tag round>{{ item.category }}</el-tag>
                        <p>{{ item.create_time }}</p>
                        <hr>
                        <div v-html="item.content"></div>
                    </div>
                </div>
            </el-card>
        </router-link>
        <div class="pagination">
            <el-pagination
                background 
                layout="prev, pager, next"
                :page-size="articlestore.pageSize"
                :total="articlestore.total"
                @current-change="articlestore.handlerchange"
            />
        </div>
    </div>
</template>

<script setup>
import { useArticleStore } from "@/stores/article";
const articlestore = useArticleStore()
</script>

<style lang="scss" scoped>
.home_container_mid{
    padding: 10px;
    .box-card{
        margin-bottom: 10px;
        border-radius: 20px;
        .card_container{
            display: flex;

            .left{
                width: 20%;
                height: 100%;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
        
            .right{
                margin-left: 10px;
                width: 80%;
                height: 200px;
                overflow: hidden;
            }

        }
     
    }

    .pagination{    
        transform: translateX(25%);
        width: 100vw;
        text-align: center;
    }
}
</style>