<template>
    <PicIitem/>
</template>

<script setup>
import PicIitem from './components/PicIitem.vue';
import { onMounted } from 'vue';
import { useGalleryStore } from '@/stores/gallery';
const gallerystore = useGalleryStore()
onMounted(()=>{
    gallerystore.getgallery()
})
</script>

<style>

</style>