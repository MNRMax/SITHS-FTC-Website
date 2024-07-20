<template>
    <div id="container" class="fixed top-0 bottom-0 items-center w-screen h-16 flex justify-center z-1000">
        <div id="bar" class="bg-[#ffffffdf] w-[90%] h-[90%] font-poppins items-center flex p-2">
            <div id="rightBar" class="h-full w-1/2 flex items-center">
            <img src="https://i.imgur.com/xblVXWU.png" class="h-full">
            <p class=" text-3xl text-black m-5 font-bold">SITHS FTC</p>
        </div>
            <div id="LeftBar" class="w-1/2 text-right">
                <router-link class="text-2xl text-center ml-4" to="/">Home</router-link>
            <router-link class="text-2xl text-center ml-4" to="/team">Team</router-link>
            <router-link class="text-2xl text-center ml-4 mr-4" to="/social">Social</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
#container{
    z-index: 100000;
}
</style>