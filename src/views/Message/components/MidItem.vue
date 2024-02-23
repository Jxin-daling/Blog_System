<template>
    <div class="message_container_mid">
        <h3>我要留言</h3>
        <div class="message_write">
            <el-form
                ref="ruleFormRef"
                :model="name"
                :rules="rules"
                class="demo-ruleForm"
                :size="formSize"
            >
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="name" placeholder="不填或空填默认匿名哦"/>
                </el-form-item>
                <el-form-item label="留言" prop="name">
                    <el-input
                        v-model="textarea"
                        maxlength="80"
                        placeholder="留下一条足迹吧"
                        show-word-limit
                        type="textarea"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button class="message_button">留言！</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<span>硬核分割线</span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div class="message_comment" v-for="index in 5" :key="index">
            <div class="comment_header">
                <span class="header_name">匿名用户</span>    
                <span class="header_date">2024-2-22</span>
            </div>
            <div class="comment_content">写的不错啊同学</div>
                <!-- 管理员回复 -->
                <div class="comment_reply">
                    <span class="reply_name">管理员</span>    
                    <span class="reply_date">2024-2-22</span>
                    <div class="reply_content">谢谢你的肯定</div>
                </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>
  
<script setup>
import { ref } from "vue";
const name = ref('')
const textarea = ref('')
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
}
</style>