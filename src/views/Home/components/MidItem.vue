<template>
    <div class="home_container_mid">
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
    .box-card{
        margin-bottom: 20px;
    }
}
</style>