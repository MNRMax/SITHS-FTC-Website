<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footer from './components/footer.vue'
import navBar from './components/navBar.vue'
</script>

<template >
<<<<<<< Updated upstream
  <navBar class="z-1000000000000000000000000000000000000000000000000"></navBar>
=======
  <navBar id="nav" class="z-1000000000000000000000000000000000000000000000000 fixed top-0   "></navBar>
  <div class="w-screen h-16 bg-slate-400 p-[2rem]"></div>
>>>>>>> Stashed changes
  <div id="page" class=" -z-10 overflow-hidden  ">
  <RouterView />

</div>

</template>

<style scoped>


</style>
