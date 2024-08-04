<template>
    <div id="holder" class="bg-gradient-to-r from-[#a6bacb] to-[#d6eaff]">
     <div class="segment2 h-[10vh] w-screen bg-gradient-to-r from-[#a6bacb] to-[#d6eaff] flex items-center justify-center font-poppins">
<p class="text-4xl font-medium text-white">Sponsored By</p>
     </div>
   <div class="segment2 h-[30vh] w-[3000px] bg-gradient-to-r from-[#a6bacb] to-[#d6eaff] flex items-center">
    <div class="scroller flexbox flex items-center justify-around w-[50%]">
    <div class="box bg-slate-50 aspect-square w-[200px] h-[200px] m-2 rounded-md flex items-center justify-center " v-for="sponsor in sponsors">
       <img :src="sponsor.url" class="w-[80%] grayscale">

    </div>
</div>
<div class="scroller flexbox flex items-center justify-around w-[50%]">
    <div class="box bg-slate-50 aspect-square w-[200px] h-[200px] m-2 rounded-md flex items-center justify-center" v-for="sponsor in sponsors">
       <img :src="sponsor.url" class="w-[80%] grayscale">

    </div>
</div>
   </div>
</div>
</template>

<script setup>
let sponsors = [{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`
},
{
    url: `https://elmtechnologies.co/wp-content/uploads/2024/07/Group-5.png`
},
{
    url: `https://preview.cruip.com/talent/images/client-06.svg`
},
{
    url: `https://freelogopng.com/images/all_img/1692441025ford-logo.png`
},
{
    url: `https://www.zarla.com/images/zarla-speedy-supply-1x1-2400x2400-20220124-j4bc3ryqcw94vq6bp6qv.png?crop=1:1,smart&width=250&dpr=2`
},
]
</script>

<style lang="css" scoped>
.scroller{
    overflow: hidden;
    animation: 20s scroll infinite linear;
}

@keyframes scroll{
    to{
        transform: translateX(-100%);
    }
}
</style>