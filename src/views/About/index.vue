<template>
    <div class="container">
        <div class="container_about">
            <el-card class="card_about"> 
                <h1>Jxin</h1>
                <hr>
                <div>热爱技术，喜欢动漫，梦想是有一天能通过代码实现自己的梦想</div>
                <div class="about_content">
                    <div class="last">
                        <h3>我有什么</h3>
                        <div>现在掌握、熟悉了html5、css3、javascript、vue3(但尚有知识缺陷),还会用node写后端连接数据库,jq?php?android?虽然学过，但是不是我的菜</div>
                    </div>

                    <div class="now">
                        <h3>现在在干什么</h3>
                        <div>正在学习微信小程序，扩宽自己的代码业务范围，打算在实习结束之前写个小程序项目</div>
                        <div>空闲时间在学隔壁的C语言，还有用数位板练画画，虽然我真的没有艺术细胞啊</div>
                    </div>

                    <div class="after">
                        <h3>未来想做什么</h3>
                        <div>做游戏，嗯，对，做一个游戏，心中拥有一个宏伟蓝图，希望有朝一日能够描绘出来带给大家</div>
                    </div>
                </div>
                <div>联系地址(github):<a href="https://github.com/Jxin-daling">https://github.com/Jxin-daling</a></div>
            </el-card>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.container_about{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    .card_about{
        width: 80%;
        height: 100%;
        background: url('../../../public/bg4.jpg');
        background-size: contain;

        a{
            text-decoration: underline;
            color: red;
            cursor: pointer;
        }

        
        a:visited {
            color: red; 
        }

        .about_content{
            
            .last,.now,.after{
                font-size: 20px;
                color: red;
                margin-bottom: 30px;
            }
        }
    }
}
</style>