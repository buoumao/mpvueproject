<template>
    <div class="index-container">
        <img v-if="isShow" class="index-img" :src="userInfo.avatarUrl" alt="">
        <button class="btn" v-else open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
        <p class="username">Hello {{userInfo.nickName}}</p>

        <div @tap="toDetail" class="go-study">
            <p>开启小程序之旅</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {},
                isShow: false,
            }
        },
        beforeMount() {
            this.handleGetUserInfo();
        },
        methods: {
            handleGetUserInfo(){
                wx.getUserInfo({
                    success: (data)=>{
                        console.log(data);
                        this.userInfo = data.userInfo;
                        this.isShow = true;
                    },
                    fail: ()=>{
                        console.log('获取失败');
                    }
                })
            },
            getUserInfo(data) {
                console.log(data)
                if(data.mp.detail.rawData){
                    //用户授权
                    this.handleGetUserInfo();
                }
            },
            toDetail(){
                // console.log("toDetail")
                wx.navigateTo({
                    url: '/pages/list/main'
                })
            }
        },
    }
</script>

<style>
page {
    background: #8ed145;
}
.index-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.index-img {
    height: 200rpx;
    width: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
}
.username {
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
    color: #eee;
}
.go-study {
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
}
.go-study p {
    color: #eee;
}
.btn {
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 50rpx 0;
    line-height: 300rpx;
    text-align: center;

}
</style>