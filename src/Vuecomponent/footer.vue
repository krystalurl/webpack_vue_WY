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
                <div class="footer-playBotton">
                    <i class="icon-play"></i>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
</script>

<style lang="scss">

    .footer{
        width: 100%;
        height: 1.5rem;
        position: fixed;
        bottom: 0;
        padding: 0.18rem;
        font-size: 0.3rem;
        border-top: 1px solid #f00;

        &-box{
            height: 100%;
            overflow: hidden;
        }

        &-img,&-songName{
            float: left;
        }

        &-playBottonBox,&-playlist{
            float: right;
            height: 100%;
            display: flex;
            align-items: center;
        }

        &-playlist{
            margin-right: 0.35rem;
            font-size: .65rem;
        }

        &-playBotton{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            border: 1px solid #000;
            text-align: center;
            line-height: 0.85rem;
            margin-right: .65rem;
            font-size: .40rem;
            cursor: pointer;
            
            i{
                margin-left: .1rem;
            }

        }

        &-img{
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: 0.2rem;

            img{
                width: 1.11rem;
                height: 1.11rem;
                border: 1px solid #000;
            }
        }

        &-songName{
            height: 100%;
            width: 3.5rem;
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            h2{
                font-weight: 700;
                color: #323232;
                margin-top: .1rem;
            }

            p{
                margin-bottom: .1rem;
            }

        }

    }

</style>