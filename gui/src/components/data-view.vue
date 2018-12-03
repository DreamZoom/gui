<template>
    <div>
        <slot :data="data"></slot>
    </div>
</template>
<script>
import axios from "axios";

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
            return axios.get(this.url,{params:this.params}).then((response)=>{
                return Promise.resolve(response.data);
            });
        }
    }
}
</script>
