<template>
    <div class="message_container_right">
        <div class="right_pic"></div>
    </div>
</template>
  
<script setup>

</script>

<style lang="scss" >
.message_container_right{
    overflow: hidden;

    .right_pic{
        width: 20.8vw;
        height: 100vh;
        background: url('../../../../public/nep.png') no-repeat;
        background-size: contain;
        transform: translateY(100px);
    }
}
</style>