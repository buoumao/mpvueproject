<template>
    <div class="list-container">
        <swiper>
            <swiper-item>
                <img src="/static/detail/img/01.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/detail/img/02.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/detail/img/03.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/detail/img/04.jpg" alt="">
            </swiper-item>
        </swiper>
        <div>
            <ListTmp>
            </ListTmp>
        </div>
    </div>
</template>

<script>
    import ListTmp from '../list_template/list_template.vue'
    export default {
        components: {
            ListTmp
        },
        data() {
            return {
                
            }
        },
        
    }
</script>

<style scoped>
.list-container swiper {
    width: 100%;
    height: 400rpx;
}
.list-container swiper img {
    width: 100%;
    height: 100%;
}
</style>