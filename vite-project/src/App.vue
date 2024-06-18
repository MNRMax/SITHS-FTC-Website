<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footer from './components/footer.vue'
import navBar from './components/navBar.vue'
</script>

<template >
  <navBar id="nav"></navBar>
  <div id="page" class=" z-0 overflow-hidden bg-[url('https://svgur.com/i/17LY.svg')] bg-cover ">
  <RouterView />

</div>

</template>

<style scoped>
/* #nav{
  z-index: 100;
} */
</style>
