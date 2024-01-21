<template>
    <div class="h-[2vh]">

    </div>
    <div id="title"
        class="bg-[#e6e1f4] w-1/2 m-auto rounded-[1rem] text-center text-[3rem] font-[Orange-Milk] text-[#0042c7]">
        <h1>Meet The Team</h1>
    </div>
    <div id="down-element" class="w-[calc(100vw-10px)] text-center text-[2rem]">
        <span id="down2" class="material-symbols-outlined m-auto relative top-[80vh] scale-150">
                expand_more
        </span>
    </div>
    <div class="h-[10vh]"> </div>
    <div class="absolute left-[11vw]">
        <div v-for="person in leftArray">
            <div class="flex">
                <div class=" w-fit text-[#002060] font-serif flex gap-8 h-[11rem] left-card"> <!-- left side -->
                    <img :src="`/images/${person.image}.png`" class="w-[11rem] h-[11rem] z-10">
                    <div class="p-4 bg-[#b7cfff] w-fit pl-[6.5rem] pr-[2rem] chamfer-right relative left-[-7.5rem]">
                        <p class="text-[1.5rem] font-bold">{{ person.name }}</p>
                        <p class="text-[1.5rem] font-bold">{{ person.role }}</p>
                        <div class=" ml-6">
                            <p v-for="detail in person.details">{{ detail }}</p>
                        </div>
                    </div>
                    <div class="w-[3vw]"></div>
                </div>
            </div>
            <div class="h-[11rem]"></div>
        </div>
    </div>
    <div class="absolute right-[-5vw]">
        <div v-for="person in rightArray">
            <div class="h-[11rem]"></div>
            <div class=" w-fit text-[#002060] text-right font-serif flex gap-8 h-[11rem] right-card"> <!-- right side -->
                <div class="p-4 bg-[#b7cfff] w-fit pr-[6.5rem] pl-[2rem] chamfer-left">
                    <p class="text-[1.5rem] font-bold">{{ person.name }}</p>
                    <p class="text-[1.5rem] font-bold">{{ person.role }}</p>
                    <div class="mr-6">
                        <p v-for="detail in person.details">{{ detail }}</p>
                    </div>
                </div>
                <img :src="`/images/${person.image}.png`" class="w-[11rem] h-[11rem] relative left-[-7.5rem]">
                <div class="w-[3vw]"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

import { team } from "../assets/team.js";

let first = []
let second = []
let temp = [first, second];

team.forEach((v, i) => temp[i % 2].push(v));
console.log(first, second);

const leftArray = ref(first);
const rightArray = ref(second);

onMounted(() => {
    let left = document.querySelectorAll(".left-card")

    left.forEach((element) => {
        let tl = gsap.timeline().from(element, {
            x: -200,
            opacity: 0,
            yoyo: true,
        })

        ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
            animation: tl
        })
    })
    let right = document.querySelectorAll(".right-card")

    right.forEach((element) => {
        let tl = gsap.timeline().from(element, {
            x: 200,
            opacity: 0,
            yoyo: true,
        })

        ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
            animation: tl
        })
    })
    gsap.to("#down2", {
        y: 20,
        repeat: -1,
        duration: 1,
        yoyo: true,
        ease: "none",
    })
    gsap.to("#down2", {
        opacity: 0,
        ScrollTrigger: {
            trigger: "#down2",
            start: "top bottom",
        }
    })
});

</script>

<style scoped>
.chamfer-right {
    clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 54%, 0% 0%);
}

.chamfer-left {
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 10% 100%, 0 54%, 10% 0);
}
</style>
