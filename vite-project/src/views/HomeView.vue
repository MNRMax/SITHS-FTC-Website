<script setup>
import video from '@/assets/media/vid.mp4'
import poster from '@/assets/media/poster.jpg'
</script>

<template>
  <div id="shootiforgotaboutthebackgroundunderthenavbar">
    <div id="gap"></div>
    <div id="page1">
      <div id="p1left">
        <div id="p1LeftContainer">
          <h1>Welcome To SITHS FTC</h1>
          <p class="frontText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <p class="frontText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div id="p1right">
        <video id="videoBG" :poster="poster" autoplay muted loop>
    <source :src="video" type="video/mp4">
</video>
        <div id="linGradient"></div>
      </div>
    </div>
    <div class="custom-shape-divider-top-1722671942">
</div>
    <div id="page2">
      <div class="custom-shape-divider-top-1722672330">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
    </svg>
</div>
    </div>

</div>
</template>

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.sen-font {
  font-family: "Sen", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

#videoBG{
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top:0;
  z-index: -1;
  height: 100%;
  width: auto;
}


#shootiforgotaboutthebackgroundunderthenavbar{
  position: absolute;
  overflow: scroll;
    width: 100%;
    height: calc(300vh);
    left: 0;
    top: calc(0PX);
    /* background-color: wheat; */
    background-image: url('https://media.discordapp.net/attachments/1026191356646932591/1269096847285420082/image.png?ex=66aed20b&is=66ad808b&hm=cf7be8ee22f6b649fa9bd78812a62ed19f07c38907a5921075a47d8a3f7f0c6f&=&format=webp&quality=lossless&width=621&height=662');
    z-index: -10;
}

#gap{
  width: 100%;  
  height: 65px;
  background-color:#2b2345;
}
.frontText{
  font-size: 1rem;
}

h1{
  font-size: 2rem;
}
#p1LeftContainer{
  overflow: scroll;
  line-height: 1.1;
  background-image: linear-gradient(rgba(0,0,255,0.075),transparent);
  border-radius: 15px;
  margin: 50px;
  color:white;
  padding: 20px;
  text-align: left;
  text-decoration: dotted;
  width: 75%; 
  height:75%;
}

#p1left{
  text-align: left;
  text-decoration: dotted;
  font-family: "Plus Jakarta Sans", sans-serif;
  /* background-image: linear-gradient(145deg,black,rgb(22, 22, 22)); */
  background-color: rgb(8,8,25);
  display: flex;
  align-items: center;
  justify-content: center;
  width:40%;
  height: 100%;
}

#linGradient{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(50,50,50,0.4); */
  background-image: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(39, 38, 44, 0.8) 100%);
  /* background-image: radial-gradient(rgba(64, 64, 64, 0.2),rgba(64, 64, 64, 0.8)) */
}

#page1{
  overflow-x: hidden;
  display: flex;
  height: calc(100vh - 65px);
  position: relative;
}
#p1right{
  height: 100%;
  width:60%;
  position: relative;
  display: flex;
  justify-content: space-between;
  /* background-image: url('https://www.frc-9597.com/assets/img/homepage_img.jpg'); */
  background-size: cover;
  background-position: 50% 50%;
}




#page2{
  height: calc(40vh);
  position: relative;
  background-color: rgb(209, 209, 214);
  background-size: cover;
  background-position: 50% 50%;
}

#contentBox{
  top: 50;
  left: 50;
  width: 75%;
  height: 75%;
  background-color: rgba(50,50,50,1);
  z-index: 100;
}

.custom-shape-divider-top-1722672330 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1722672330 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 200px;
}

.custom-shape-divider-top-1722672330 .shape-fill {
    fill: #0C0A20;
}

@media (min-aspect-ratio: 16/9) {
    #videoBG {
      
        width:auto;
        height: 100%;
    }
}
@media (max-aspect-ratio: 16/9) {
    #videoBG { 
      width:100%;
      height: auto;
    }
}
@media (max-width: 767px) {
    #videoBG {
        display: none;
    }
    body {
      overflow: hidden;
        background: url('poster.jpg');
        background-size: cover;
    }
}
</style>  