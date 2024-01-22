<template>
    <div class="h-[2vh]">

    </div>
    <div id="title-outreach"
        class="bg-[#e6e1f4] w-1/2 m-auto rounded-[1rem] text-center text-[3rem] font-[Orange-Milk] text-[#0042c7]">
        <h1 class="">Our Initiatives</h1>
    </div>
    <div class="h-[10vh]">

    </div>
    <div class="flex justify-center gap-[6rem] text-center">
        <div id="card1-outreach" class="bg-white w-[25%] rounded-lg p-2 shadow-[#b2b2b2] shadow-lg">
            <h2 class="bg-[#93b4ff] text-center rounded-lg text-[2.1rem] font-[Cocogoose]">Mercury Motorists!</h2>
            <img src="/images/car.png" class="w-full mt-3">
            <p class="text-black text-[1.1rem] font-serif p-6">
                We wanted to form partnerships with elementary schools to teach STEM lessons that help students develop
                creativity and problem-solving skills as well as provide them with early exposure to engineering fields.
            </p>
            <a @click="motorists">Learn More!</a>
        </div>
        <div id="card2-outreach" class="bg-white w-[25%] rounded-lg p-2 shadow-[#b2b2b2] shadow-lg">
            <h2 class="bg-[#93b4ff] text-center rounded-lg text-[2.1rem] font-[Cocogoose]">Our Mission</h2>
            <p class="text-black text-[1.3rem] font-serif p-6">
                Aligned with FIRST’s mission, Team 23463 aims to address current civic and humanitarian issues via
                innovative projects that engage and encourage our community to participate in S.T.E.M. In this environment,
                students are encouraged to develop skills in programming, mechanical and electrical engineering, graphic
                design, technical writing, website development, life skills, and current events. With this acquired
                knowledge, our team seeks to excel in the FIRST Tech Challenge and inspire others to pursue S.T.E.M.
                professions.
            </p>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

function motorists() {
    gsap.to(window, { duration: 2, scrollTo: { y: "#title-motorists", offsetY: 20 } });
}

onMounted(() => {
    gsap.from("#title-outreach", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#title-outreach",
            end: "top center",
            scrub: true,
        },
        yoyo: true,
    })
    gsap.from("#card1-outreach", {
        x: -200,
        opacity: 0.5,
        display: "none",
        scrollTrigger: {
            trigger: "#card1-outreach",
            end: "middle center",
            scrub: true,
        },
        yoyo: true,
    })
    gsap.from("#card2-outreach", {
        x: 200,
        opacity: .5,
        display: "none",
        scrollTrigger: {
            trigger: "#card2-outreach",
            end: "middle center",
            scrub: true,
        },
        yoyo: true,
    })
});

</script>