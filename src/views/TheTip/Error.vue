<template>
    <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="12">
            <el-result
                icon="error"
                title="出错了"
                sub-title="你访问的页面可能不存在"
            >
                <template #extra>
                <el-button type="primary" @click="$router.back()">返回之前页面</el-button>
                </template>
            </el-result>
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>

<script setup>

</script>

<style>

</style>