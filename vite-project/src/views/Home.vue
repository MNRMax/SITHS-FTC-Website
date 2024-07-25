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
  




<div class="page1 h-full min-h-screen font-sans" >
  <div class="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center z-[-9] flex flex-col justify-center align-center h-[100%] w-[100%]" >
<span class="text-[#d6eaff] font-poppins text-7xl font-[400] tracking-[1px] text-center bg-fixed bg-center bg-no-repeat bg-cover">SITHS Saturn</span>
<div class="imageHolder h-[45%] flex justify-center items-center">
<img src="https://cdn.discordapp.com/attachments/1250613112520970312/1264633814257373186/IMG_0158.png?ex=669f3e45&is=669decc5&hm=082e280601786b4d4ecdc5614195cc98f936725590eac8b45301f7a580f05421&" class="h-[100%] w-[auto] ">
</div>
<span class="sub text-[#d6eaff] font-['Poppins',_sans-serif] text-2xl font-light tracking-[1px] text-center">FTC team since 2024</span>
</div>
<div class="gradient"></div>
</div>
<scroller></scroller>
<div class="page2 h-1/2 min-h-screen flex text-right font-sans bg-[url('https://img.freepik.com/premium-photo/smart-engineering-nice-aged-man-holding-screwdriver-while-building-robot_259150-31500.jpg')] bg-[cover] bg-center " >
<div class="left min-h-[100%] w-1/2 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
  <div class="leftCont w-2/6">
<h2 class="text-5xl text-center">About Us</h2>
</div>
</div>
<div class="right min-h-[100%]  bg-cover w-1/2  ">
<p>o-w</p>
</div>
</div>x



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
  background: #000f2299;
  z-index: 0;
  position: absolute;
  top: 50%;
  z-index: -10;
  left: 50%;
  min-width: 100vw;
  transform: translate(-50%, -50%);
  text-align: center;
 
}


.left{
  mask-image: url("https://i.imgur.com/ts7uvUz.png");
  -webkit-mask-image: url("https://i.imgur.com/mUGRwhP.png");
  mask-size: auto 100%;
  -webkit-mask-size: 95% 100%;
  mask-position: left;
  -webkit-mask-position: left;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

}
</style>