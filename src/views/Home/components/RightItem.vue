<template>
     <div class="container_avatar">
        <div class="avatar_box">
            <el-avatar 
                class="avatar"
                src="../../../../public/fuzi.jpg"
            >
            </el-avatar>
        </div>
    </div>
</template>
  
<script setup>

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