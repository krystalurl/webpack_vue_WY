

<template>

    <div class="content">
        <div class="content-shuffling">
            <ul class="content-shufflingImg" ref="shufflingUL">
                <li v-for="(item,index) in list" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)"><img :src="item" alt=""></li>
            </ul>
            <div class="content-shufflingPoint">
                <ul>
                    <li :class="shufflingIndex == index ? 'current' : ''" @click="init(index)" v-for='(item,index) in shufflingPoint'></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        data(){
            return{
                list:['./src/musicHall/img/1.jpg','./src/musicHall/img/2.jpg','./src/musicHall/img/3.jpg','./src/musicHall/img/4.jpg','./src/musicHall/img/5.jpg','./src/musicHall/img/1.jpg'],
                shufflingPoint: 5,  //5个小点
                shufflingPress: 0,  //按下
                shufflingMobile: 0, //移动
                shufflingLoosen: 0, //松开
                shufflingWidth: 0,  //位移的宽度
                shufflingIndex: 0,  //当前小标
            }
        },
        mounted(){
            this.init();
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
                
                this.shufflingLoosen = e.changedTouches[0].pageX;

                var UL = this.$refs.shufflingUL;
                var mobile = this.shufflingPress - this.shufflingLoosen;
                
                if( mobile >= 150 ){
                    this.shufflingIndex++;
                    
                }else if( mobile <= -150 ){
                    this.shufflingIndex--;
                    
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

