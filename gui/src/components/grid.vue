<template>
    <div class="gui-grid">
        <div class="gui-grid-item" v-for="(item,i) in data" :key="i" :style="{width:itemWidth}" @click="handleClick(item)">
            <img :src="item[icon]" :alt="item.text" class="gui-grid-item-icon" />
            <span class="gui-grid-item-text">
                {{item[name]}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        columns:{
            type:[Number],
            default:4
        },
        data:{
            type:[Array],
            default:[]
        },
        name:{
            type:[String],
            default:"name"
        },
        icon:{
            type:[String],
            default:"icon"
        },
        onClick:Function
    },
    computed:{
        itemWidth(){
            if(this.columns<=0){
                return "auto";
            }
            return (1/this.columns)*100+"%";
        }
    },
    methods:{
        handleClick(item){
            this.$emit("item-click",item);
        }
    }
}
</script>
<style scoped>
.gui-grid{
    display: flex;
    flex-wrap: wrap;
}
.gui-grid-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 10px 0;
}
.gui-grid-item:active{
    background-color: #eee;
}
.gui-grid-item .gui-grid-item-icon{
    width: 40px;
    height: 40px;
}
.gui-grid-item .gui-grid-item-text{
    font-size: 12px;
}

</style>


