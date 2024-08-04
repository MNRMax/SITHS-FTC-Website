<template>
      <main>
        <h2 id="sponTitle">Our Sponsors ❤️</h2>
        <div class="slider" reverse="true" style="
            --width: 200px;
            --height: 200px;
            --quantity: 7;
        ">
            <div class="list">
                <a v-for="i in 7" :href="images[i - 1].link">
                <div class="item"  :style="`--position: ${i}`">
                    <img :src="images[i - 1].url" alt="" class="sImage" >
                </div>
            </a>
                 </div>
        </div>
    </main>
</template>

<script setup>
function gotoLink(link){
    location.href= link.value
    window.open()
}

let images = [{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
},
{
    url: `https://elmtechnologies.co/wp-content/uploads/2024/07/Group-5.png`,
    link: `https://elmtechnologies.co/`,
},
{
    url: `https://preview.cruip.com/talent/images/client-06.svg`,
    link: `https://shakeshack.com`,
},
{
    url: `https://freelogopng.com/images/all_img/1692441025ford-logo.png`,
    link: `https://shakeshack.com`,
},
{
    url: `https://www.zarla.com/images/zarla-speedy-supply-1x1-2400x2400-20220124-j4bc3ryqcw94vq6bp6qv.png?crop=1:1,smart&width=250&dpr=2`,
    link: `https://shakeshack.com`,
},
{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
},
{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
},
{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
},
{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
},
]
console.log(images[2].url)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
#sponTitle{
    text-align: center;
    font-size: 2rem;
    font-family: "Plus Jakarta Sans", sans-serif ;
}

body{
    margin: 0;
    background-color: #e5e5e5;
}
main{
    width: 100%;
    margin: auto;
}
.slider{
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 3% 97%,
        transparent
    );
}
.slider .list{
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
}
.sImage{
    filter: grayscale(1);
}

.item{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    height: 200px;
    background-color: aqua;
}
.slider .list .item{
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc( (10s / var(--quantity)) * (var(--position) - 1) )!important;
}
.slider .list .item img{
    width: 100%;
}
@keyframes autoRun{
    from{
        left: 100%;
    }to{
        left: calc(var(--width) * -1);
    }
}
.slider:hover .item{
    animation-play-state: paused!important;
    filter: grayscale(1);
}
.slider .item:hover{
    filter: grayscale(0);
}

.item:hover .sImage{
    filter: grayscale(0);
}
.slider[reverse="true"] .item{
    animation: reversePlay 10s linear infinite;
}
@keyframes reversePlay{
    from{
        left: calc(var(--width) * -1);
    }to{
        left: 100%;
    }
}   
.sImage{
    width: 80%;
    width: auto;
   
    margin: 20px;
}
</style>
































<!-- <template>
    <div id="holder">
        <div class="scroller">
        <div v-for="i in sponsors" class="box">
            <img :src="i.url" class="image"></img>
        </div>
    </div>

    <div class="scroller">
        <div v-for="i in sponsors" class="box">
            <img :src="i.url" class="image"></img>
        </div>
    </div>
</div>
</template>

<script setup>
let sponsors = [{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`
},
{
    url: `https://elmtechnologies.co/wp-content/uploads/2024/07/Group-5.png`
},
{
    url: `https://preview.cruip.com/talent/images/client-06.svg`
},
{
    url: `https://freelogopng.com/images/all_img/1692441025ford-logo.png`
},
{
    url: `https://www.zarla.com/images/zarla-speedy-supply-1x1-2400x2400-20220124-j4bc3ryqcw94vq6bp6qv.png?crop=1:1,smart&width=250&dpr=2`
},
]
</script>

<style  scoped>

.scroller{
    overflow: hidden;
    animation: 5s scroll infinite linear;
    max-width: 1500px;
    display: flex;
    justify-content: space-around;
    margin: 0px    ;
}

@keyframes scroll{
    to{
        transform: translateX(-100%);
    }
}

.box{
    filter: grayscale(1);
    height: 200px;
    width: 200px;
    aspect-ratio: 1 / 1;
    background-color: gainsboro;
    border: 2px black solid;
    display: flex;
    align-items: center;
    margin: 0px;
    justify-content: space-evenly;
}

.image{
    height: auto;
    width: 80%;
}
#holder{
    top: 0;
    align-items: center;
    left: 0;
    background-color: green;
    height: 100%;
    width: 2000px;
    display: flex;
    justify-content: space-around;
}
</style> -->

















<!-- <template>
    <div id="holder">
     <div class="segment2 h-[10vh] w-screen bg-gradient-to-r from-[#a6bacb] to-[#d6eaff] flex items-center justify-center font-poppins">
<p class="text-4xl font-medium text-white">Sponsored By</p>
     </div>
   <div class="segment2 h-[30vh] w-[3000px] bg-gradient-to-r from-[#a6bacb] to-[#d6eaff] flex items-center">
    <div class="scroller flexbox flex items-center justify-around w-[50%]">
    <div class="box bg-slate-50 aspect-square w-[200px] h-[200px] m-2 rounded-md flex items-center justify-center " v-for="sponsor in sponsors">
       <img :src="sponsor.url" class="w-[80%] grayscale">

    </div>
</div>
<div class="scroller flexbox flex items-center justify-around w-[50%]">
    <div class="box bg-slate-50 aspect-square w-[200px] h-[200px] m-2 rounded-md flex items-center justify-center" v-for="sponsor in sponsors">
       <img :src="sponsor.url" class="w-[80%] grayscale">

    </div>
</div>
   </div>
</div>
</template>

<script setup>
let sponsors = [{
    url: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`
},
{
    url: `https://elmtechnologies.co/wp-content/uploads/2024/07/Group-5.png`
},
{
    url: `https://preview.cruip.com/talent/images/client-06.svg`
},
{
    url: `https://freelogopng.com/images/all_img/1692441025ford-logo.png`
},
{
    url: `https://www.zarla.com/images/zarla-speedy-supply-1x1-2400x2400-20220124-j4bc3ryqcw94vq6bp6qv.png?crop=1:1,smart&width=250&dpr=2`
},
]
</script>

<style lang="css" scoped>
#holder{
    background-image: linear-gradient(to right, var(--tw-gradient-stops)); 
}

.scroller{
    overflow: hidden;
    animation: 20s scroll infinite linear;
}

@keyframes scroll{
    to{
        transform: translateX(-100%);
    }
}
</style> -->