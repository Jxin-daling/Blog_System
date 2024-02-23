<template>
    <div class="home_container_mid">
        <el-row><input type="text" class="search" placeholder="今天想看点什么?"></el-row>
        <el-card class="box-card" v-for="o in 5" :key="o">
            <div>{{ 'List item ' + o }}</div>
        </el-card>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home_container_mid{
    padding: 10px;

    .search{
        width: 100%;
        padding-left: 20px;
        border-radius: 10px;
        height: 5vh;
        margin: 20px;
    }

    .box-card{
        margin-bottom: 20px;
    }
}
</style>