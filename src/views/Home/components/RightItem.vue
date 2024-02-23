<template>
     <div class="container_avatar">
        <div class="avatar_box">
            <el-avatar 
                class="avatar"
                src="../../../../public/fuzi.jpg"
                @click="lalala"
            >
            </el-avatar
            >
        </div>
    </div>

    <el-dialog 
        v-model="dialogVisible"
        title="？？？"
        width="500"
        :before-close="handleClose"
    >
        <el-form
            ref="ruleFormRef"
            :model="name"
            :rules="rules"
            class="demo-ruleForm"
            :size="formSize"
        >
            <el-form-item prop="name">
                <el-input v-model="name" placeholder="请输入神秘代码"/>
            </el-form-item>
            <el-form-item prop="name">
                <el-input v-model="name" placeholder="请输入神秘代码"/>
            </el-form-item>
            <el-button @click="err">点我！</el-button>
            <el-button @click="err">点我！</el-button>
            <el-button @click="err">点我！</el-button>
            <el-button @click="success">点我！</el-button>
            <el-button @click="err">点我！</el-button>
            <el-button @click="err">点我！</el-button>
        </el-form>
    </el-dialog>
</template>
  
<script setup>
import { ref } from "vue"
import { h } from 'vue'
import { ElNotification } from 'element-plus'


const dialogVisible = ref(false)
const n = ref(0)   //计数器
const lalala = ()=>{
    console.log(n.value);
    n.value++
    if(n.value > 4)  dialogVisible.value = true;
    setTimeout(() => {
        n.value = 0
        console.log("定时器关闭");
    }, 2000);    
}

const err = ()=>{
    dialogVisible.value = false
    ElNotification({
        title: '悄悄话',
        message: h('i', { style: 'color: red' }, '世界的真相之一，这些按钮都是骗人的'),
    })
}

const success = ()=>{
    
}
</script>

<style lang="scss" >
.container_avatar{
    display: flex;
    justify-content: center;
    
    .avatar_box{
        height: 100%;

        .avatar{
            width: 100px;
            height: 100px;
        }
    }


}
</style>