<template>
    <div class="container_message">
        <el-descriptions v-for="item in messageinfo" :key="item" class="message_item">
            <el-descriptions-item>{{ item.username }}</el-descriptions-item>
            <el-descriptions-item label="留言时间">{{ item.date }}</el-descriptions-item>
            <el-descriptions-item>
                <el-button :icon="ChatDotRound">回复</el-button>
                <el-popconfirm :title="`确定删除?`" @confirm="remove(item)" @cancel="cancel">
                    <template #reference>
                        <el-button :icon="Delete" type="danger">删除</el-button>
                        </template>
                    </el-popconfirm>
            </el-descriptions-item>
            <el-descriptions-item>
                {{ item.msg }}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script setup>
import { ChatDotRound, Delete } from '@element-plus/icons-vue';
const messageinfo = [
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'},
    {username:'匿名用户',msg:'写的不错啊',date:'2023-12-30'}
]

const remove = (item)=>{
    console.log(item);
    console.log("删除喽");
}
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