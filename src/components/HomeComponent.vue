<template>
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

gsap.registerPlugin(ScrollTrigger);

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