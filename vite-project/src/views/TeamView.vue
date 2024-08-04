<template>
<video id="videoBG" :poster="poster" autoplay muted loop>
    <source :src="video" type="video/mp4">
</video>
</template>

<style>
#videoBG{
  z-index: 10000;
  height: 100px;
  width: auto;
  position: absolute;
  top: 50;
  background-color: azure;
  left: 50;
}
</style>

<script setup>
import video from '@/assets/media/vid.mp4'
import poster from '@/assets/media/poster.jpg'
</script>