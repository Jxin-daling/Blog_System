import { defineStore } from "pinia"
import { getCategoryApi } from '@/apis/category'
import { ref } from "vue"

export const useCategoryStore = defineStore('category',()=>{
    const categorylist = ref([])

    const getcategory = async ()=>{
        await getCategoryApi().then(res=>{
            categorylist.value = res
        })
    }

    return{
        getcategory,categorylist
    }
})