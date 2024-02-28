<template>
    <CategoryItem/>
</template>

<script setup>
import CategoryItem from './components/CategoryItem.vue';
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';
const categorystore = useCategoryStore()
onMounted(()=>{
    categorystore.getcategory()
})
</script>

<style>

</style>