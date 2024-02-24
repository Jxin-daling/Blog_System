import { defineStore } from 'pinia';
import { routes,indexchildren } from '@/router';
import { ref } from 'vue';
const routerStore = defineStore('routerlist',()=>{
    const webroutes = ref(indexchildren)
    const adminroutes = ref(routes)

    return {
        webroutes,adminroutes
    }
})

export default routerStore