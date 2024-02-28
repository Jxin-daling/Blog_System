<template>
    <div class="container_message">
        <el-descriptions v-for="item in messageArr" :key="item" class="message_item">
            <el-descriptions-item>{{ item.visitorname }}</el-descriptions-item>
            <el-descriptions-item label="留言时间">{{ item.create_time }}</el-descriptions-item>
            <el-descriptions-item>
                <el-button :icon="ChatDotRound" @click="reply(item)">回复</el-button>
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

    <el-dialog v-model="dialogFormVisible" title="留言回复" width="500">
        <el-form
            :model="messageForm"
            :rules="rules"
            ref="formRef"
        >
            <el-form-item label="分类名称" prop="content">
                <el-input type="textarea" v-model="messageForm.content" placeholder="请输入回复内容"/>
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { ChatDotRound, Delete } from '@element-plus/icons-vue';
import { postMessageReplyApi,delMessageApi } from '@/apis/message'
import { useMessageStore } from '@/stores/message';
import { onMounted, ref, reactive } from 'vue';
const messagestore = useMessageStore()

// 回复dialog
const dialogFormVisible = ref(false)
const messageForm = ref({
    mvid:'',
    content:''
})

// 校验规则
const rules = reactive({
    content:[
        {required:true, message:'回复内容不能为空', trigger:'blur'}
    ]
})

const formRef = ref()

const messageArr = ref()
messageArr.value = messagestore.messagevisitorlist

// 回复评论
const reply = (item)=>{
    const {mvid} = item
    messageForm.value.mvid = mvid
    dialogFormVisible.value = true
}

// 提交回复数据
const confirm = ()=>{
    dialogFormVisible.value = true
    formRef.value.validate(async(valid)=>{
        if(valid){
            postMessageReplyApi(messageForm.value)
            dialogFormVisible.value = false
        }
  })
}

// 删除访客回复
const remove = (item)=>{
    const { mvid } = item
    delMessageApi({mvid})
}

const cancel = ()=>{
    dialogFormVisible.value = false
}

onMounted(()=>{
    messagestore.getmessagevisitor()
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