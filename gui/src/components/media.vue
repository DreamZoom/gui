<template>
    <div class="gui-media" @click="handleClick">
        <div class="gui-media-icon">
            <img :src="icon" alt="" :style="iconStyle">
        </div>
        <div class="gui-media-body">
            <div class="gui-media-body-title"><slot name="title">{{title}}</slot></div>
            <div class="gui-media-body-content"><slot name="content">{{content}}</slot></div>
            <div class="gui-media-body-meta"> <slot name="meta"></slot></div>
        </div>
        <div class="gui-media-right">

        </div>
    </div>
</template>

<style scoped>
    .gui-media{
        display: flex;

    }
    .gui-media-icon img{
        width: 60px;
        vertical-align: bottom;
    }
    .gui-media-body{
        padding-left: 10px;
    }
    .gui-media-body-content{
        color: #aaa;
        font-size: 12px;
    }
    .gui-media-body-meta{
        color: #aaa;
        font-size: 12px;
    }
</style>
<script>
export default {
    props:{
        icon:{
            type:[String],
            default:""
        },
        iconStyle:{
             type:[Object],
             default:function(){ return {}}
        },
        title:{
            type:[String],
            default:""
        },
        content:{
            type:[String],
            default:"还没有签名哦！"
        }
    },
    methods:{
        handleClick(){
            this.$emit("click");
        }
    }
}
</script>


