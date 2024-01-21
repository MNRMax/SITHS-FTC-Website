<template>
    <div class="h-[2vh]">

    </div>
    <div id="title" class="bg-[#e6e1f4] w-1/2 m-auto rounded-[1rem] text-center text-[3rem] font-[Orange-Milk] text-[#0042c7]">
        <h1 class="">Overview</h1>
    </div>
    <div class="h-[10vh]">

    </div>
    <div class="flex justify-center gap-[6rem]">
        <div id="card1" class="bg-white w-[25%] rounded-lg p-2">
            <h2 class="bg-[#93b4ff] text-center rounded-lg text-[2.1rem] font-[Cocogoose]">About The Team</h2>
            <p class="text-black text-[1.3rem] font-serif p-6">
                SITHS Mercury is a FIRST Tech Challenge Robotics Team based in Staten Island, New York. We founded this team in the summer of 2023 and currently have 14 members (mostly juniors) and two coaches.
            </p>
        </div>
        <div id="card2" class="bg-white w-[25%] rounded-lg p-2">
            <h2 class="bg-[#93b4ff] text-center rounded-lg text-[2.1rem] font-[Cocogoose]">Our Mission</h2>
            <p class="text-black text-[1.3rem] font-serif p-6">
                Aligned with FIRST’s mission, Team 23463 aims to address current civic and humanitarian issues via innovative projects that engage and encourage our community to participate in S.T.E.M. In this environment, students are encouraged to develop skills in programming, mechanical and electrical engineering, graphic design, technical writing, website development, life skills, and current events. With this acquired knowledge, our team seeks to excel in the FIRST Tech Challenge and inspire others to pursue S.T.E.M. professions.
            </p>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.from("#title", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#title",
            end: "top center",
            scrub: true,
        },
        yoyo: true,
    })
    gsap.from("#card1", {
        x: -200,
        opacity: 0.5,
        display: "none",
        scrollTrigger: {
            trigger: "#card1",
            end: "middle center",
            scrub: true,
        },
        yoyo: true,
    })
    gsap.from("#card2", {
        x: 200,
        opacity: .5,
        display: "none",
        scrollTrigger: {
            trigger: "#card1",
            end: "middle center",
            scrub: true,
        },
        yoyo: true,
    })
});

</script>