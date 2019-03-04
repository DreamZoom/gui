<template>
    <div class="gui-page">
        <slot>
            
        </slot>
    </div>
</template>
<script>
export default {
    updated(){
        console.log(this);
    } 
}
</script>

<style scoped>
 .gui-page{
     position: relative;
 }
</style>


