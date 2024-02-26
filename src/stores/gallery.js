import { defineStore } from "pinia"
import { getGalleryApi } from '@/apis/gallery'
import { ref } from "vue"

export const useGalleryStore = defineStore('gallery',()=>{
    const gallerylist = ref([])

    const getgallery = async ()=>{
        await getGalleryApi().then(res=>{
            gallerylist.value = res
        })
    }

    return{
        getgallery,gallerylist
    }
})