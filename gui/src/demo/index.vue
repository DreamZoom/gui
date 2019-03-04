<template>
    <div>
        <gui-data-view url="/api/news/news/find-all" :filter="filter">
            <div slot-scope="scope">
                <van-cell-group>
                    <van-cell :title="item.title" value="内容" v-for="(item,i) in scope.data" :key="i" />
                </van-cell-group>
            </div>
        </gui-data-view>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
               
            }
        },
        methods: {
            filter(data) {
                console.log(data);
                return data;
            }
        }
    }
</script>
