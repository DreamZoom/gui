<template>
     <div class="gui-panel" :style="{padding:padding}">
         <div class="gui-panel-header" v-if="title"><slot name="header">{{title}}</slot> <span class="gui-panel-header-more"><slot name="more"></slot></span></div>
         <div class="gui-panel-body"><slot></slot></div>    
         <div class="gui-panel-footer"><slot name="footer"></slot></div>   
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:[String],
            default:""
        },
        padding:{
            type:[String],
            default:"10px"
        }
    },
}
</script>


<style scoped>
.gui-panel{
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
}
.gui-panel-header{
    font-size: 12px;
    border-bottom: #efefef 1px solid;
    padding: 10px 0;
}
.gui-panel-header-more{
    float: right;
}
</style>
