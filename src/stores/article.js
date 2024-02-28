import { defineStore } from "pinia"
import { getArticleApi } from '@/apis/article'
import { ref } from "vue"

export const useArticleStore = defineStore('article',()=>{
    const articlelist = ref([])
    const total = ref(0)
    // 页码数
    const currentPage = ref(1)
    // 每页展示数
    const pageSize = ref(5)

    const getarticle = async ()=>{
        await getArticleApi().then(res=>{
            articlelist.value = res.msg
            total.value = res.total
        })
    }

    // 记录页面数变化
    const handlerchange = (value)=>{
        currentPage.value = value
    }

    const showPageSize = (index)=>{
        if(currentPage.value == 1){
            return index<4
        }else{
            return index>=4*currentPage.value-4&&index<4*currentPage.value
        }
    }

    return{
        getarticle,handlerchange,showPageSize,articlelist,total,pageSize
    }
})