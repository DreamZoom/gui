<template>
    <div class="gui-data-paged">
        <div class="gui-data-list">
            <div class="gui-data-list-item" v-for="(item,i) in list" :key="i">
                <slot :data="item"></slot>
            </div>
            <div class="gui-data-list-empty" v-if="list.length==0">暂无数据</div>
        </div>
        <div>
            <slot name="pagination" :pagination="pagination"></slot>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    export default {
        props: {
            url: String,
            params: Object,
            filter: {
                type: Function,
                default: function(response) {
                    console.log(response);
                    const { content,totalElements} =response.data;
                    return {result:response.result,data:{list:content,total:totalElements}};
                }
            }
        },
        data() {
            return {
                list: [],
                pagination: {
                    page: 1,
                    size: 5,
                    records: 0
                },
            }
        },
        mounted() {
            this.loadPageData();
        },
        watch: {
            pagination: {　　　　
                handler(newValue, oldValue) {　　　　　　
                    console.log(newValue)　　　
                    this.loadPageData();　
                },
                deep: true　　
            }
        },
        methods: {
            loadData() {
                const pagedata = {
                    page: this.pagination.page - 1,
                    size: this.pagination.size
                }
                return this.$http.get({
                    url: this.url,
                    data: {
                        ...this.params,
                        ...pagedata
                    }
                });
            },
            loadPageData() {
                this.loadData().then((response) => {
                    response=this.filter(response);
                    if (response.result) {
                        this.list = response.data.list;
                        this.pagination.records = response.data.total;
                        console.log(response)
                    }
                });
            }
        }
    }
</script>

<style>
    .gui-data-list-item {
        padding: 10px 0;
    }
    .gui-data-list-empty {
        text-align: center;
        font-size: 12px;
        padding: 40px 10px;
        color: #aaa;
    }
</style>


