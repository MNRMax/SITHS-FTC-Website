<template>
    <img src="/images/space.jpg" class="absolute w-[100%] h-[100%] z-[-1]">
    <div class="w-[100vw] h-[100vh]">

        <div v-if="isMobile()">
            <div class="h-[20vh]"></div>

            <div
                class="bg-[#e6e1f400] w-3/4 m-auto rounded-[1rem] text-center text-[2.5rem] font-[Orange-Milk] text-[#ffffff]">
                <h1 class="">Staten Island Tech's FTC Team</h1>
                <h1 class="">SITHS Mercury 23463</h1>
            </div>
            <SocialsComponent class="absolute top-4 left-2 m-auto w-fit" :horizontal="true"/>
            <div class="h-[22vh]"></div>
        </div>
        <div v-else>
            <div class="absolute flex gap-4 text-[1.5rem] right-12 top-2">
                <a @click="about" class="cursor-pointer underline">About Us</a>
                <p>|</p>
                <a @click="outreach" class="cursor-pointer underline">Outreach</a>
                <p>|</p>
                <a @click="team" class="cursor-pointer underline">Meet The Team</a>
                <img @click="log" src="/images/ftc_logo.png" class="h-[3rem]">
            </div>
            <SocialsComponent class="absolute top-16 left-2"/>
            <div class="h-[40vh]"></div>
            <div
                class="bg-[#e6e1f400] w-3/4 m-auto rounded-[1rem] text-center text-[5rem] font-[Orange-Milk] text-[#ffffff]">
                <h1 class="">Staten Island Tech's FTC Team</h1>
                <h1 class="">SITHS Mercury 23463</h1>
            </div>
            <div class="h-[16vh]"></div>
        </div>
        
        <div id="scroll-text" class="w-full text-center text-[2rem]">
            <h2 class="font-[Cocogoose]">Scroll Down</h2>
            <span id="down" class="material-symbols-outlined">
                expand_more
            </span>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialsComponent from "./SocialsComponent.vue";

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

function log() {
    console.log("masha")
}

gsap.registerPlugin(ScrollTrigger);

function team() {
    gsap.to(window, { duration: 2, scrollTo: { y: "#title-team", offsetY: 300 } });
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