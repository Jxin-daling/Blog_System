<template>
    <div class="home_container_left">
        <el-card class="box-card">
            <h3>最新</h3>
            <el-divider/>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>

        <el-card class="box-card">
            <h3>最热</h3>
            <el-divider/>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home_container_left{
    .box-card{
        margin: 50px 0 50px 20px;
    }
}
</style>