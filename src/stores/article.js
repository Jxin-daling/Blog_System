import { defineStore } from "pinia"
import { getArticleApi } from '@/apis/article'
import { ref } from "vue"

export const useArticleStore = defineStore('article',()=>{
    const articlelist = ref([])

    const getarticle = async ()=>{
        await getArticleApi().then(res=>{
            articlelist.value = res
        })
    }

    return{
        getarticle,articlelist
    }
})