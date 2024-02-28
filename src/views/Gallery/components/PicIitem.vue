<template>
    <div class="container">
        <div class="container_pic">
            <el-card v-for="(item,index) in gallerystore.gallerylist.msg" :key="index" class="card">
                <img
                    :src="item.imgurl"
                    class="image"
                />
                <div style="padding: 14px">
                    <span>{{ item.imgname }}&nbsp;</span>
                    <span>{{ item.create_time }}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { useGalleryStore } from '@/stores/gallery';
const gallerystore = useGalleryStore()
</script>

<style lang="scss">
.container_pic{
    margin: 0 10vw;
    column-count: 3;
    column-gap: 0;

    .card{
        margin: 10px;

        .image{
            display: block;
            width: 100%;
        }
    }

    .card:hover{
        box-shadow: 0 0 10px black;
        animation: dither 0.4s linear 1;
    }

    @keyframes dither {
        0%{
            transform: rotate(3deg);
        }
        20%{
            transform: rotate(5deg);
        }
        40%{
            transform: rotate(3deg);
        }
        60%{
            transform: rotate(0deg);
        }
        80%{
            transform: rotate(-3deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
}
</style>