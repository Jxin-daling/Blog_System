import { defineStore } from "pinia"
import { getCategoryApi,getCategoryListApi } from '@/apis/category'
import { ref } from "vue"

export const useCategoryStore = defineStore('category',()=>{
    const categorylist = ref([])
    const categoryitem = ref([])

    const total = ref(0)
    // 页码数
    const currentPage = ref(1)

    const getcategory = async ()=>{
        await getCategoryApi().then(res=>{
            categorylist.value = res
        })
    }

    const getcategorylist = async (value)=>{
        await getCategoryListApi(value).then(res=>{
            categoryitem.value = res.msg
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
        getcategory,getcategorylist,handlerchange,showPageSize,categorylist,categoryitem,total
    }
})