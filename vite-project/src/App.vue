<script setup>
import { RouterLink, RouterView } from 'vue-router'

import navBar from './components/navBar.vue'
</script>

<template>
  <div id="page">
<navBar></navBar>
  <RouterView />
</div>
</template>

<style scoped>

</style>
