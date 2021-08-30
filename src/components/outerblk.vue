<template>
<div id="longblk">
    <innerblk/>
    <innerblk/>
    <innerblk/>
</div>
</template>
<script>
import innerblk from "./innerblk.vue";
export default{
    components:{
        innerblk
    }
}
</script>
<style  scoped>
#longblk{
    width:100px;
    height:280px;
    background: #EB8392;
    padding-top: 5px;
}
</style>
