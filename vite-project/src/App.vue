<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footer from './components/footer.vue'
import navBar from './components/navBar.vue'
</script>

<template >
  <navBar id="nav" class="z-1000000000000000000000000000000000000000000000000"></navBar>
  <div class="w-screen h-16 bg-slate-400 p-[2rem]"></div>
  <div id="page" class=" -z-10 overflow-hidden  ">
  <RouterView />

</div>

</template>

<style scoped>


</style>
