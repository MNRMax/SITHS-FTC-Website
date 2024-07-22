<template>
    <div id="container" class="bg-slate-100 w-screen h-16 flex justify-center items-end z-1000">
        
    </div>
<div class=" h-full min-h-screen bg-slate-200">
<div class="h-[25vh] text-center items-center justify-left bg-slate-100 flex">
<div class="text-7xl m-7 font-light"><h2>Meet our team.</h2></div>
</div>
<div class="h-[75vh] text-center items-center justify-center bg-slate-100 flex overflow-auto w-fit" id="track">
<img class="mx-[1px] h-[100%] w-auto" v-for="i in images" :src="i">
</div>
</div>

<div class=" h-full min-h-screen bg-slate-200"></div>

</template>

<style>
#track::-webkit-scrollbar {
    display: none;
}

#track {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

<script setup>
import { onMounted } from 'vue';
onMounted( () => {
    window.scrollTo(0,0); 
})

const track = document.getElementById('track')

window.onmousedown = e => {
    track.dataset.Mouse
}


let images = [
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/p-aaronwei_tim.jpg?width=400&height=600&name=p-aaronwei_tim.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/l-rocky.jpg?width=900&height=600&name=l-rocky.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/p-cindy-dave-sign.jpg?width=400&height=600&name=p-cindy-dave-sign.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/l-tableboisam.jpg?width=900&height=600&name=l-tableboisam.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/p-cindy-dave-sign.jpg?width=400&height=600&name=p-cindy-dave-sign.jpg',
    'https://www.saltedstone.com/hs-fs/hubfs/2018/about/l-tableboisam.jpg?width=900&height=600&name=l-tableboisam.jpg',
]

</script>