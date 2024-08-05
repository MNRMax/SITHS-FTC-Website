<template>
      <main>
        <div id="scrollBarText" data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
        <h2 id="sponTitle" >Our Supporters</h2>
        <h2 id="subText">Sponsors + Partners</h2>
    </div>
        <div class="slider" reverse="true" style="
            --width: 200px;
            --height: 175px;
            --quantity: 7;
        ">
            <div class="list">
                <a v-for="i in 7" :href="info[i - 1].link">
                <div class="item"  :style="`--position: ${i}`">
                    <img :src="info[i - 1].image" alt="" :class="`sImage`" :style="`padding:${info[i - 1].padding}px;`" >
                </div>
            </a>
                 </div>
                 
        </div>
    </main>
</template>

<script setup>

// import AOS from "aos"
// import "aos/dist/aos.css"
// AOS.init()

let info = [{
    image: `https://cdn.cookielaw.org/logos/b3a9f5b0-b5f6-4102-abbf-d87d74e3e6b9/42a0570f-c58f-4f30-87a2-7ce089747ebc/c2b93f77-01e5-458c-8f85-8fe5b400d3f6/MicrosoftTeams-image_(26).png`,
    link: `https://shakeshack.com`,
    padding: 20,
},
{
    image: `https://elmtechnologies.co/wp-content/uploads/2024/07/Group-5.png`,
    link: `https://elmtechnologies.co/`,
    padding: 10,
},
{
    image: `https://3.files.edl.io/fd75/20/04/09/191319-2af8eea0-9bd2-4795-8791-640f550a5c8f.png`,
    link: `https://www.siths.org/`,
    padding: 30,
},
{
    // image: `https://i.imgur.com/T1bGDmp.png`,
    // non red version above 
    image: `https://i.imgur.com/e3eVGWM.png`,
    link: `https://sithsftc.com/`,
    padding: 0,
},
{
    image: `https://www.solidworks.com/sites/default/files/inline-images/First-logo-transparent-new.png`,
    link: `https://www.firstinspires.org/`,
    padding: 30,
},
{
    image: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
    padding: "",
},
{
    image: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
    padding: "",
},
{
    image: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
    padding: "",
},
{
    image: `https://i.pinimg.com/originals/52/af/e4/52afe4e9fbd02b957d741c9be9fb1ceb.png`,
    link: `https://shakeshack.com`,
    padding: "",
},
]
console.log(info[2].image)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

#subText{
   
     font-family: "Plus Jakarta Sans", sans-serif ;
     font-weight: 200;
     text-align: center;
     margin-top: 0px;
}
#sponTitle{
    text-decoration: underline;
    /* color: rgb(217, 217, 217); */
    text-align: center;
    font-weight: 400;
    margin: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 3rem;
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
    /* transform: rotate(4deg); */
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
    border-radius: 5px;
    height: 175px;
    background-color: ghostwhite;
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
.slider .list {
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
    transition: .25s;
    filter: grayscale(0);
    transform: scale(1.1);
}

.item:hover .sImage{
    transition: .25s;
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
   height: auto;
   width: 100%;
}

</style>