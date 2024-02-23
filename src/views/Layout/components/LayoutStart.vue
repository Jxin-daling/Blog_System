<template>
    <div class="container_start">
        <div class="start_box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>欢迎来到我的博客~❤</span>
        </div>
        <div class="uparrow" @click="up">上拉箭头</div>
    </div>
</template>

<script setup>
const emit = defineEmits(['changehandler'])
const up = ()=>{
    emit('changehandler')
}
</script>

<style lang="scss">
.container_start{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../../../public/bg1.png') no-repeat;
    background-size: cover;
    
    .uparrow{
        cursor: pointer;
        position: fixed;
        bottom: 0vh;
        left: 50vw;
        background-color: black;
        color: white;
    }

    .start_box{
        position: relative;
        width: 800px;
        height: 200px;
        overflow: hidden;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0005);

        span:nth-child(1){
            display: block;
            width: 100%;
            height: 40px;
            left: -100%;
            top: 0;
            position: absolute;
            background: linear-gradient(90deg,transparent,rgba(1,1,1,0.7));
            animation: move1 1s linear infinite;
            animation-delay: 0s;
        }

        span:nth-child(2){
            display: block;
            width: 100%;
            height: 40px;
            left: 100%;
            bottom: 0;
            position: absolute;
            background: linear-gradient(90deg,transparent,rgba(1,1,1,0.7));
            animation: move2 1s linear infinite;
            animation-delay: 0.5s;
        }

        span:nth-child(3){
            display: block;
            width: 40px;
            height: 100%;
            right: 0;
            top: -100%;
            position: absolute;
            background: linear-gradient(180deg,transparent,gray);
            animation: move3 1s linear infinite;
        }

        span:nth-child(4){
            display: block;
            width: 40px;
            height: 100%;
            left: 0;
            bottom: -100%;
            position: absolute;
            background: linear-gradient(360deg,transparent,gray);
            animation: move4 1s linear infinite;
            animation-delay: 0.5s;
        }

        span:nth-child(5){
            display: block;
            position: absolute;
            left: 90px;
            top: 70px;
            font-size: 50px;
            color: white;
            letter-spacing: 20px;
        }

        @keyframes move1 {
            0%{
                left: -100%;
            }
            100%{
                left: 100%;
            }
        }

        @keyframes move2 {
            0%{
                left: 100%;
            }
            100%{
                left: -100%;
            }
        }

        @keyframes move3 {
            0%{
                top: -100%;
            }
            100%{
                top: 100%;
            }
        }

        @keyframes move4 {
            0%{
                bottom: -100%;
            }
            100%{
                bottom: 100%;
            }
        }
    }

}
</style>