<template>
    <div class="message_container_mid">
        <h3>我要留言</h3>
        <div class="message_write">
            <el-form
                ref="formRef"
                :model="messageFrom"
                :rules="rules"
            >
                <el-form-item label="昵称" prop="visitorname">
                    <el-input v-model="messageFrom.visitorname" placeholder="不填或空填默认匿名哦"/>
                </el-form-item>
                <el-form-item label="留言" prop="content">
                    <el-input
                        v-model="messageFrom.content"
                        maxlength="80"
                        placeholder="留下一条足迹吧"
                        show-word-limit
                        type="textarea"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button class="message_button" @click="confirm">留言！</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<span>硬核分割线</span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div class="message_comment" v-for="message in messagestore.messagevisitorlist" :key="message.mvid">
            <div class="comment_header">
                <span class="header_name">{{ message.visitorname }}</span>&nbsp;    
                <span class="header_date">{{ message.create_time }}</span>
            </div>
            <div class="comment_content">{{ message.content }}</div>
                <!-- 管理员回复 -->
                <div class="comment_reply" v-for="reply in messagestore.messagereplylist" :key="reply.mpid" v-show="reply.mvid == message.mvid">
                    <span class="reply_name">{{ reply.admin }}</span>    
                    <span class="reply_date">{{ reply.create_time }}</span>
                    <div class="reply_content">{{ reply.content }}</div>
                </div>
        </div>
        <div class="pagination">
            <el-pagination
                background 
                layout="prev, pager, next"
                :page-size="messagestore.pageSize"
                :total="messagestore.total"
                @current-change="messagestore.handlerchange"
            />
        </div>
    </div>
</template>
  
<script setup>
import { ref,reactive } from "vue";
import { postMessageVisitorApi } from '@/apis/message'
import { useMessageStore } from '@/stores/message';
import { ElMessage } from "element-plus";
const messagestore = useMessageStore()

// 获取表单实例
const formRef = ref()

// 准备表单对象
const messageFrom = ref({
    visitorname:'',
    content:''
})

// 校验规则 
const rules = reactive({
    content:[
        {required:true, message:'留言内容不能为空', trigger:'blur'}
    ]
})

// 提交表单
const confirm = ()=>{
    formRef.value.validate(async(valid)=>{
        if(valid){
            if(messageFrom.value.visitorname.replace(/\s/gi, '')){
                postMessageVisitorApi(messageFrom.value)
            }else{
                messageFrom.value.visitorname = '匿名用户'
                postMessageVisitorApi(messageFrom.value)
            }
            ElMessage({
                message: '留言成功',
                type: 'success',
            })
            messageFrom.value.visitorname = ''
            messageFrom.value.content = ''
        }
    })
}

</script>

<style lang="scss" >
.message_container_mid{
    padding: 10px;
    margin: 10px;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background:rgba(1,1,1,0.3);
    overflow: hidden;
    text-wrap: nowrap;

    // 留言编写
    .message_write{

        textarea{
            resize:none
        }

        .message_button{
            width: 20vw;
            border-radius: 10px;
            position: relative;
            left: 35vw;
        }
    }

    // 全部留言
    .message_comment{
        margin: 5px;
        span{
            color:white;
        }

        border: 3px solid white;
        padding: 5px;
        border-radius: 10px;

        // 管理员回复
        .comment_reply{
            margin: 10px;
            border: 3px solid white;
            color: red;
        }
    }

    .pagination{    
        position: relative;
        top: 20px;
        left: 80px;
        text-align: center;
    }
}
</style>