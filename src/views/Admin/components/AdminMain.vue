<template>
    <div class="container_menu_cotent">
        <router-view v-if="flag"></router-view>
    </div>
</template>

<script setup>
import { ref,watch,nextTick } from "vue";
import useSettingStore from '@/stores/setting';
const settingstore = useSettingStore()
const flag = ref(true)

watch(()=>settingstore.refresh,()=>{
    flag.value = false
    nextTick(()=>{
        flag.value = true
    })
})
</script>

<style>

</style>