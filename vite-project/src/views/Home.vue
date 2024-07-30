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
  



<<<<<<< Updated upstream
=======
<div class="page1 flex flex-row h-[calc(100vh-4rem)] w-[100vw] bg-slate-500">
<img src="https://html5up.net/uploads/demos/story/images/banner.jpg" class="w-full h-full object-cover">
>>>>>>> Stashed changes

<div class="page1 h-full min-h-screen " >
  <div class="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center z-[-9] flex flex-col justify-center align-center h-[100%] w-[100%]" >
<span class="text-[white] font-['Poppins',_sans-serif] text-6xl font-[650] tracking-[1px] text-center bg-fixed bg-center bg-no-repeat bg-cover">SITHS Mercury</span>
<div class="imageHolder h-[45%] flex justify-center items-center">
<img src="https://cdn.discordapp.com/attachments/1250613112520970312/1264633814257373186/IMG_0158.png?ex=669f3e45&is=669decc5&hm=082e280601786b4d4ecdc5614195cc98f936725590eac8b45301f7a580f05421&" class="h-[100%] w-[auto] ">
</div>
<<<<<<< Updated upstream
<span class="sub text-[white] font-['Poppins',_sans-serif] text-2xl font-light tracking-[1px] text-center">FTC team since 2024</span>
</div>
<div class="gradient"></div>
</div>
<scroller></scroller>
<div class="page2 h-full min-h-screen bg-slate-300" >
<p>test</p>
=======
<div class="page1 flex flex-row h-[100vh] w-[100vw] bg-slate-500">
<img src="https://html5up.net/uploads/demos/story/images/banner.jpg" class="w-full h-full object-cover">

>>>>>>> Stashed changes
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