<template>
    <div class="gui-data-list">
        <div class="gui-data-list-item" v-for="(item,i) in list" :key="i">
            <slot :data="item"></slot>
        </div>
        <div class="gui-data-list-empty" v-if="list.length==0">暂无数据</div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    props:{
        url:String,
        params:Object,
    },
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        this.loadData().then((response)=>{
            if(response.result){
                this.list= response.data;
            }          
        })
    },
    methods:{
        loadData(){
            return  this.$http.get({
                url:this.url,
                data:{
                    ...this.params
                }
            });
        }
    }
}
</script>

<style>
.gui-data-list-item{
    padding: 10px 0;
}
.gui-data-list-empty{
    text-align: center;
    font-size: 12px;
    padding: 40px 10px;
    color: #aaa;
}
</style>


