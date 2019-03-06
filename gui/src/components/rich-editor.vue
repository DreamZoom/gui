<template>
    <div ref="editor">
        {{value}}
    </div>
</template>
<script>
export default {
    props:{
        value:null,
        options:Object
    },
    mounted(){
        if(typeof Quill ==='function'){
            const dom = this.$refs.editor;
            this.quill = new Quill(dom, {
                 theme: 'snow',
                 ...this.options
            });
        }
        else{
            console.error("this component need  Quill.js ,please require it .");
        }
        
    }
}
</script>
