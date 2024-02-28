import { defineStore } from 'pinia'
import { getMessageApi } from '@/apis/message'
import { ref } from 'vue'

export const useMessageStore = defineStore('message',()=>{
    const messagevisitorlist = ref([])
    const messagereplylist = ref([])
    const total = ref(0)
    // 页码数
    const currentPage = ref(1)
        
    const getmessagevisitor = async ()=>{
        await getMessageApi().then(res=>{
            messagevisitorlist.value = res.msg1
            total.value = res.total
        })
    }

    const getmessagereply = async ()=>{
        await getMessageApi().then(res=>{
            messagereplylist.value = res.msg2
        })
    }

    // 记录页面数变化
    const handlerchange = (value)=>{
        currentPage.value = value
    }

    const showPageSize = (index)=>{
        if(currentPage.value == 1){
            return index<5
        }else{
            return index>=5*currentPage.value-5&&index<5*currentPage.value
        }
    }

    return {
        messagevisitorlist,messagereplylist,total,handlerchange,getmessagevisitor,getmessagereply,showPageSize
    }
})  