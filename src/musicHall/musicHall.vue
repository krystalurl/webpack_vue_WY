

<template>

    <div class="content">
        <div class="content-shuffling">
            <ul class="content-shufflingImg" ref="shufflingUL">
                <li v-for="(item,index) in list" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)"><img :src="item" alt=""></li>
            </ul>
            <div class="content-shufflingPoint">
                <ul>
                    <li :class="reversedMessage == index ? 'current' : ''" @click="init(index)" v-for='(item,index) in shufflingPoint'></li>
                </ul>
            </div>
        </div>
        <div class="content-option">
            <ul>
                <li>
                    <a href="#">
                        <img src="./img/option_03.png" alt="">
                        <p>私人FM</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="./img/option_05.png" alt="">
                        <p>每日推荐</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="./img/option_07.png" alt="">
                        <p>歌单</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="./img/option_09.png" alt="">
                        <p>排行榜</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content-songList">
            <a href="#" class="h2">推荐歌单<i></i></a>
        </div>
        <div class="content-songMenu">
            <ul>
                <li>
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                    <p>当古典音乐遇上另类演绎，妙趣横生</p>
                </li>
                <li>
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                    <p>当古典音乐遇上另类演绎，妙趣横生</p>
                </li>
                <li>
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                    <p>当古典音乐遇上另类演绎，妙趣横生</p>
                </li>
                <li>
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                    <p>当古典音乐遇上另类演绎，妙趣横生</p>
                </li>
                <li>
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                    <p>当古典音乐遇上另类演绎，妙趣横生</p>
                </li>
                <li>
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                    <p>当古典音乐遇上另类演绎，妙趣横生</p>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    export default {
        data(){
            return{
                list:['./src/musicHall/img/1.jpg','./src/musicHall/img/2.jpg','./src/musicHall/img/3.jpg','./src/musicHall/img/4.jpg','./src/musicHall/img/5.jpg','./src/musicHall/img/1.jpg'],
                shufflingPoint: 5,  //5个小点
                shufflingPointIndex: 0,//5个小点的下标
                shufflingPress: 0,  //按下
                shufflingMobile: 0, //移动
                shufflingLoosen: 0, //松开
                shufflingWidth: 0,  //位移的宽度
                shufflingIndex: 0,  //当前下标
            }
        },
        mounted(){
            this.init();
        },
        computed: {

            reversedMessage: function(){
                this.shufflingPointIndex = this.shufflingIndex;
                if( this.shufflingPointIndex == this.shufflingPoint ){
                    this.shufflingPointIndex = 0;
                }
               return this.shufflingPointIndex;
            }

        },
        methods: {

            init: function(index){
                var _this = this;
                var UL = this.$refs.shufflingUL;
                var length = UL.children.length;
                this.shufflingWidth = 100 / length;
                var tran = 0;

                UL.style.width = 100 * length + "%";
                
                if( index >= 0 ){
                    clearInterval(key);
                    tran = index * this.shufflingWidth;
                    this.shufflingIndex = index;
                    UL.style.transform = "translateX(-"+tran+"%)";
                    UL.style.transition = "all .8s";
                }

                window.key = setInterval(function(){
                    
                    _this.shufflingIndex++;
                    tran += _this.shufflingWidth;
                    if( _this.shufflingIndex == length ){
                        tran = 100 / length;
                        _this.shufflingIndex = 1;
                        UL.style.transform = "translateX(0)";
                        UL.style.transition = "all 0s";
                    }
                    
                    setTimeout(function(){
                        UL.style.transform = "translateX(-"+tran+"%)";
                        UL.style.transition = "all .8s";
                    },50)

                },2000)
            },

            touchstart: function( e ){
                
                this.shufflingPress = e.changedTouches[0].pageX;
                clearInterval(key);

            },

            touchmove: function( e ){

                this.shufflingMobile = e.changedTouches[0].pageX;

                var mobile = this.shufflingPress - this.shufflingMobile;
                mobile = (this.shufflingIndex+1) * mobile;
                var UL = this.$refs.shufflingUL; 
                var tran = this.shufflingIndex * this.shufflingWidth;
                
                if( mobile > 0 ){
                    UL.style.transform = "translateX(calc(-"+tran+"% + -"+mobile+"px))";
                }else{
                    mobile = -mobile;
                    UL.style.transform = "translateX(calc(-"+tran+"% + "+mobile+"px))";
                }

            },

            touchend: function( e ){
                
                var _this = this;
                this.shufflingLoosen = e.changedTouches[0].pageX;

                var UL = this.$refs.shufflingUL;
                var mobile = this.shufflingPress - this.shufflingLoosen;
                var length = UL.children.length;
                
                if( mobile >= 150 ){
                    this.shufflingIndex++;
                    
                }else if( mobile <= -150 ){
                    this.shufflingIndex--;
                    
                }
                
                if( this.shufflingIndex == length ){
                    
                    this.shufflingIndex = 1;
                }

                if( this.shufflingIndex == -1 ){
                    
                    this.shufflingIndex = length - 2;
                }

                var tran = this.shufflingWidth * this.shufflingIndex;
                UL.style.transform = "translateX(-"+tran+"%)";
                this.init(this.shufflingIndex);

            }


        }
    }

</script>


<style lang="scss">

    @import '../All_css/musicHall.scss';

</style>

