<script setup>
import { RouterLink, RouterView } from 'vue-router'

import navBar from './components/navBar.vue'
</script>

<template>
  <navBar></navBar>
  <div id="page">
  <RouterView />
</div>
</template>

<style scoped>

</style>
