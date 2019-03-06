<template>
    <div>
        <div ref="editor">
            {{value}}
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            value: null,
            options: Object
        },
        mounted() {
            if (typeof Quill === 'function') {
                const editor = this.$refs.editor;
                this.quill = new Quill(editor, {
                    theme: 'snow',
                    ...this.options
                });
                this.quill.on('editor-change', () => {
                    var c = this.quill.container.firstChild.innerHTML;
                    this.$emit("input",c);
                });
            } else {
                console.error("this component need  Quill.js ,please require it .");
            }
        }
    }
</script>
