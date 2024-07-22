<script setup>
import navBar from '@/components/navBar.vue';
import scroller from '@/components/scrollingGallery.vue'

import { onMounted } from 'vue';
onMounted( () => {
  AOS.init();
    window.scrollTo(0,0); 
})


</script>

<template>
  




<div class="page2 h-full min-h-screen " >
  <div class="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center z-[-9]" >
<span class="text-[white] font-['Poppins',_sans-serif] text-[35px] font-[650] tracking-[1px] text-center bg-fixed bg-center bg-no-repeat bg-cover">SITHS Mercury</span><br>
<span class="sub text-[white] font-['Poppins',_sans-serif] text-[20px] font-light tracking-[1px] text-center">FTC team since 2024</span>
</div>
<div class="gradient" ></div>
</div>
<scroller ></scroller>
<div class="page2 h-full min-h-screen bg-slate-300" >
<p>test</p>
</div>




</template>

<style lang="css">
 

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


body {
  margin: 0;
  padding: 0;
  z-index: 0;
   background: url('https://cdn.geekwire.com/wp-content/uploads/2017/05/Ballard-HS-2.jpg');
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.gradient {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: rgba(0,0,0,0.6  );
  z-index: 0;
  position: absolute;
  top: 50%;
  z-index: -10;
  left: 50%;
  min-width: 100vw;
  transform: translate(-50%, -50%);
  text-align: center;
 
}






</style>