<template>
    <div class="container_message">
        <el-descriptions v-for="item in messageArr" :key="item" class="message_item">
            <el-descriptions-item>回复 >>>{{ item.admin }}--{{ item.mvid }}</el-descriptions-item>
            <el-descriptions-item label="回复时间">{{ item.create_time }}</el-descriptions-item>
            <el-descriptions-item>
                <el-popconfirm :title="`确定删除?`" @confirm="remove(item)" @cancel="cancel">
                    <template #reference>
                        <el-button :icon="Delete" type="danger">删除</el-button>
                        </template>
                    </el-popconfirm>
            </el-descriptions-item>
            <el-descriptions-item>
                {{ item.content }}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script setup>
import { ChatDotRound, Delete } from '@element-plus/icons-vue';
import { useMessageStore } from '@/stores/message';
import { onMounted, ref } from 'vue';
import { delReplyApi } from '@/apis/message'
const messagestore = useMessageStore()

// 回复数据 
const messageArr = ref()
messageArr.value = messagestore.messagereplylist

// 删除回复
const remove = (item)=>{
    const { mpid } = item
    delReplyApi({mpid})
}

onMounted(()=>{
    messagestore.getmessagereply()
})
</script>

<style lang="scss">
.container_message{
    .message_item{
        margin: 0 0 10px 10px;
        border: 1px solid black;
        border-radius: 30px;
        padding: 10px 0 0 10px;
    }
}
</style>