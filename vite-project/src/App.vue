<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footer from './components/footer.vue'
import navBar from './components/navBar.vue'
</script>

<template >
  <navBar class="z-1000000000000000000000000000000000000000000000000"></navBar>
  <div id="page" class=" -z-10 overflow-hidden  ">
  <RouterView />

</div>

</template>

<style scoped>


</style>
