<template>
    <div id="container" class=" bg-slate-200 w-screen h-16 flex justify-center items-end z-1000">
        
    </div>
<div class=" h-full min-h-screen bg-slate-200">
<div class="h-[25vh] text-center items-center justify-end bg-slate-200 flex">
<div class="text-5xl m-5 font-light"><h2>Meet our award-winning team.</h2></div>
</div>
<div class="h-[75vh] text-center items-center justify-end bg-slate-200 flex overflow-auto">
<img v-for="i in images" :src="i" class="mx-[1px] h-[100%] w-auto" >
</div>
</div>
</template>

<style>

</style>

<script setup>
import { onMounted } from 'vue';
onMounted( () => {
    window.scrollTo(0,0); 
})

let images = [
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/p-aaronwei_tim.jpg?width=400&height=600&name=p-aaronwei_tim.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/l-rocky.jpg?width=900&height=600&name=l-rocky.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/p-cindy-dave-sign.jpg?width=400&height=600&name=p-cindy-dave-sign.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/l-tableboisam.jpg?width=900&height=600&name=l-tableboisam.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/p-cindy-dave-sign.jpg?width=400&height=600&name=p-cindy-dave-sign.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/l-tableboisam.jpg?width=900&height=600&name=l-tableboisam.jpg',
]

</script>