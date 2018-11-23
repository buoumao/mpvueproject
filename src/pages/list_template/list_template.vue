<template>
    <div class="tmp-container">
        <div class="avatar-date">
            <img src="/static/detail/img/03.jpg" alt="">
            <span>2018</span>
        </div>
        <p class="company">硅谷之巅</p>
        <img class="detail-img" src="/static/img/guigu.jpg" alt="">
        <p class="content">石墨文档是一款轻便、简洁的在线协作文档工具,PC端和移动端全覆盖,支持多人同时对文档编辑和评论,让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作。</p>
        <div class="view-star-container">
            <img src="/static/img/icon/shoucang.png" alt="">
            <span>66</span>
            <img src="/static/img/icon/chakan.png" alt="">
            <span>88</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .tmp-container {
        display: flex;
        flex-direction: column;
        border-bottom: 1rpx solid #eee;
    }
    .avatar-date {
        padding: 10rpx;
    }
    .avatar-date img {
        width: 60rpx;
        height: 60rpx;
        vertical-align: middle;
        margin-right: 10rpx;
    }
    .avatar-date span {
        font-size: 28rpx;
        color: #333;
    }
    .company {
        font-size: 40rpx;
        font-weight: bold;
        padding: 10rpx;
    }
    .detail-img {
        width: 100%;
        height: 460rpx;
    }
    .content {
        font-size: 32rpx;
        text-indent: 32rpx;
        line-height: 50rpx;
        letter-spacing: 3rpx;
    }
    .view-star-container img {
        width: 32rpx;
        height: 32rpx;
        vertical-align: middle;
        margin-left: 10rpx;
    }
    .view-star-container span {
        font-size: 28rpx;
        color: #333;
        margin-left: 10rpx;
    }
</style>