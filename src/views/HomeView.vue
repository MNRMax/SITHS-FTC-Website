<template>
    <div id="home" class="w-[100%] h-[100vh] page">
        <HomeComponent/>
    </div>
    <div id="mission" class="w-[100%] page">
        <MissionComponent/>
    </div>
    <div id="outreach" class="w-[100%] h-[100vh] page">
        <OutreachComponent/>
    </div>
    <div id="motorists" class="w-[100%] page">
        <STEMEducation/>
    </div>
    <div id="team" class="w-[100%] page mt-[20vh]">
        <TeamComponent/>
    </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HomeComponent from "@/components/HomeComponent.vue";
import MissionComponent from "@/components/MissionComponent.vue";
import { onMounted } from "vue";
import TeamComponent from "@/components/TeamComponent.vue";
import OutreachComponent from "@/components/OutreachComponent.vue";
import STEMEducation from "@/components/STEMEducation.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
    
    // let right = document.querySelectorAll(".page")

    // right.forEach((element) => {
    //     gsap.to(element, {
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: element,
    //         // start: "bottom 80%",
    //         delay: 0.1,
    //         durration: 0.01,
    //         snap: 0.5,
    //     }
    // })
    // })
});

</script>