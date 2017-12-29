<template>

    <footer class="footer">
        <div class="footer-box">
            <div class="footer-img">
                <img src="" alt="">
            </div>
            <div class="footer-songName">
                <h2>Booty Music</h2>
                <p>横滑可以切换上下首哦</p>
            </div>
            <div class="footer-playlist">
                <i class="icon-list-music"></i>
            </div>
            <div class="footer-playBottonBox">
                <div class="footer-playBotton" @click="play">
                    <i v-show="playSuspended==0" class="icon-playdetail"></i>
                    <i v-show="playSuspended==1" class="icon-pause-detail"></i>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>

    export default {

        data(){
            return{
                playSuspended: 0,   //播放、暂停按钮
            }
        },
        methods: {
            play: function(){
                this.playSuspended = !this.playSuspended;
            }
        }

    }

</script>

<style lang="scss">

    @import '../All_css/footer.scss';

</style>