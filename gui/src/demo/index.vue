<template>
    <div>
        <gui-data-view url="/api/news/news/find-all" :filter="filter">
            <div slot-scope="scope">
                <van-cell-group>
                    <van-cell :title="item.title" value="内容" v-for="(item,i) in scope.data" :key="i" />
                </van-cell-group>
            </div>
        </gui-data-view>
        <img v-for="(img,i) in imageList" v-lazy="img" :key="i">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imageList: [
                    'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
                    'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                    'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
                ]
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
