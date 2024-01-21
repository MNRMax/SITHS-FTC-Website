<template>
    <div id="home" class="w-[100%] h-[100vh]">
        <HomeComponent/>
    </div>
    <div id="mission" class="w-[100%] h-[100vh]">
        <MissionComponent/>
    </div>
    <div id="team" class="w-[100%] h-[100vh]">
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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
    gsap.to("#home", {
        ease: "none",
        scrollTrigger: {
            trigger: "#mission",
            delay: 0.1,
            durration: 0.01,
            snap: 0.5,
        }
    })
});

</script>