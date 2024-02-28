<template>
     <div class="container_avatar">
        <div class="avatar_box">
            <el-avatar 
                class="avatar"
                src="../../../../public/fuzi.jpg"
                @click="lalala"
            >
            </el-avatar>
            <div class="box">
                <div class="circle"></div>
                <div class="square"></div>
            </div>
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
    n.value++
    if(n.value > 4)  dialogVisible.value = true;
    setTimeout(() => {
        n.value = 0
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
    height: 100%;
    justify-content: center;
    
    .avatar_box{
        position: relative;
        height: 100%;

        .avatar{
            position: absolute;
            top: 80px;
            left: -70px;
            width: 150px;
            height: 150px;
            z-index: 2;
        }

        .box{
            position: relative;
            right: 100px;
            top: 100px;

            .circle{
                width: 200px;
                height: 200px;
                background-color: white;
                border-radius: 50%;
                position: absolute;
                top: 0;
                border-bottom: 1px solid black;
            }

            .square{
                width: 200px;
                height: 80px;
                background-color: white;
                border-bottom: 1px solid black;
                position: absolute;
                top: 100px;
            }
        }

        .box::before{
            content: 'Jxin';
            font-size: 30px;
            text-align: center;
            width: 200px;
            height: 1px;
            background-color: black;
            position: absolute;
            top: 130px;
            z-index: 1;
        }
    }


}
</style>