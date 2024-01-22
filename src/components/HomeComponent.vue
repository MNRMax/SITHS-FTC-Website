<template>
    <SocialsComponent class="absolute top-16 left-2"/>
    <div class="absolute flex gap-4 text-[1.5rem] right-12 top-2">
        <a @click="about" class="cursor-pointer underline">About Us</a>
        <p>|</p>
        <a @click="outreach" class="cursor-pointer underline">Outreach</a>
        <p>|</p>
        <a @click="team" class="cursor-pointer underline">Meet The Team</a>
    </div>
    <div class="h-[40vh]">
    </div>
    <div class="bg-[#e6e1f4] w-1/2 m-auto rounded-[1rem] text-center text-[3rem] font-[Orange-Milk] text-[#0042c7]">
        <h1 class="">Staten Island Tech's FTC Team</h1>
        <h1 class="">SITHS Mercury 23463</h1>
    </div>
    <div class="h-[35vh]">

    </div>
    <div id="scroll-text" class="w-full text-center text-[2rem]">
        <h2 class="font-[Cocogoose]">Scroll Down</h2>
        <span id="down" class="material-symbols-outlined">
            expand_more
        </span>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialsComponent from "./SocialsComponent.vue";

gsap.registerPlugin(ScrollTrigger);

function team() {
    gsap.to(window, { duration: 2, scrollTo: { y: "#title-team", offsetY: 300} });
}

function about() {
    gsap.to(window, { duration: 2, scrollTo: { y: "#title", offsetY: 300 } });
}

function outreach() {
    gsap.to(window, { duration: 2, scrollTo: { y: "#title-outreach", offsetY: 300 } });
}

onMounted(() => {
    gsap.to("#down", {
        y: 10,
        repeat: -1,
        duration: 1,
        yoyo: true,
    })
    gsap.to("#scroll-text", {
        y: -100,
        opacity: 0,
        duration: 1,
        yoyo: true,
        scrollTrigger: {
            trigger: "#scroll-text",
            start: "bottom center",
            scrub: true,
        }
    })
});
</script>