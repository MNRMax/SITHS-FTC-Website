<template>
    <div class="h-[2vh]">

    </div>
    <div id="title-motorists"
        class="bg-[#e6e1f4] w-1/2 m-auto rounded-[1rem] text-center text-[3rem] font-[Orange-Milk] text-[#0042c7]">
        <h1 class="">Mercury Motorists!</h1>
    </div>
    <div class="h-[10vh]"></div>

    <div class="flex justify-center gap-12">
        <div class="bg-[#cbf2d9] text-black font-serif text-center w-[35vw] p-4 rounded-[1rem] shadow-[#a0bfab] shadow-lg">
            <div class="text-[2rem] font-[Lemon] bg-white rounded-lg border-black border-[2px]">How We Came Up With The Idea
            </div>
            <div class="h-[1.5rem]"></div>
            <div class="text-[1.2rem]">
                The roots of creating the STEM lesson plans came from our freshman experience at Staten Island Tech, where
                our Intro to Robotics course had a curriculum that worked with a program called Engineering Tomorrow - we
                had monthly workshops with college engineering students and industry professionals who taught us the
                intricacies of various STEM projects, including paper airplanes, catapults, and solar-powered vehicles.
            </div>
        </div>
        <img src="/images/sanding.png">
    </div>
    <div class="h-[10vh]"></div>
    <div class="flex justify-center gap-12">
        <div>
            <div class="flex gap-2">
                <img src="/images/slides.png" class="w-[17.5vw] rounded-[2rem">
                <img src="/images/car2.png" class="w-[17.5vw] rounded-[2rem] border-[2px] border-black">
            </div>
            <img src="/images/parts.png" class="w-[17.5vw] ml-[7.5vw] rounded-[2rem]">
        </div>
        <div class="bg-[#cbf2d9] text-black font-serif text-center w-[35vw] p-4 rounded-[1rem] shadow-[#a0bfab] shadow-lg">
            <div class="text-[2rem] font-[Lemon] bg-white rounded-lg">OUR PLAN & how we executed it</div>
            <div class="h-[1.5rem]"></div>
            <div class="text-[1.2rem]">
                We decided to first create a Gravity Car slide lesson, which would appeal to our elementary school
                audience age-group.
                After making the lesson and 3D modeling the car, we began printing, sanding, and assembling the parts.
                We then had a meeting with our principal to discuss our idea and presented a proposal.
                As of now, we are in the process of finding possible schools to debut this program. Currently, we are
                partnered with two elementary schools and the Korean Community Development Center (KCDC).
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

});

</script>