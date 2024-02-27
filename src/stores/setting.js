import { defineStore } from "pinia";
import { ref } from "vue";

const useSettingStore = defineStore('setting',()=>{
    let refresh = ref(true)

    return {
        refresh
    }
})

export default useSettingStore