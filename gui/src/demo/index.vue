<template>
    <div>
        <gui-data-paged url="/api/category/page-list">
            <div slot-scope="scope">
                <van-cell-group>
                    <van-cell :title="scope.data.title" value="内容" />
                </van-cell-group>
            </div>
            <template slot="pagination" slot-scope="{pagination}">
                        <van-pagination 
                            v-model="pagination.page" 
                            :total-items="pagination.records" 
                            :items-per-page="pagination.size"
                            />
            </template>
        </gui-data-paged>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            filter(data) {
                console.log(data);
                return data;
            }
        }
    }
</script>
