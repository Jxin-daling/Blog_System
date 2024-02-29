<template>
    <div class="container">
        <div class="home_container_mid">
            <router-link 
                :to="`/detail/`+item.aid"
                v-for="(item,index) in categorystore.categoryitem" 
                :key="index"
                v-show="categorystore.showPageSize(index)"
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
                    :page-size="categorystore.pageSize"
                    :total="categorystore.total"
                    @current-change="categorystore.handlerchange"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";
const categorystore = useCategoryStore()
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(()=>{
    categorystore.getcategorylist(route.params)
})
</script>

<style lang="scss" scoped>
.home_container_mid{
    padding: 10px;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;

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

.home_container_mid::-webkit-scrollbar{
    display: none;
}
</style>