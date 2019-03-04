<template>
    <div class="gui-data-view">
        <slot :data="data"></slot>
    </div>
</template>
<script>
export default {
    props:{
        url:String,
        params:Object,
        filter:{
            type:Function,
            default:function(response){
                return response;
            }
        }
    },
    data(){
        return {
            data:{}
        }
    },
    mounted(){
        this.loadData().then((response)=>{
            console.log(response);
            this.data = this.filter(response.data);
        });
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
