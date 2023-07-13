<script setup>
import { ref, onMounted } from 'vue';

const mounted = ref(false)
const top = ref(null)
const hideheading = ref(false)

onMounted(() => {
    top.value.focus()
    window.addEventListener('scroll', getScroll);
    mounted.value = true
})

function getScroll() {
    console.log(top.value.classList)
    if (!mounted.value) {
        return
    }
    if (top.value.classList.contains("aos-animate")) {
        console.log(true)
        hideheading.value = true
    }
    else {
        console.log(false)
        hideheading.value =false
    }
}
</script>

<template >
    <main @scroll="getScroll()">
        <div class="heading" data-aos="fade-up" ref="heading">
            <div id="titles">
                <h1 id="school">Staten Island Technical High School</h1>
                <h1>FTC Team 508</h1>
                <div id="scroll" :class="hideheading ? 'up' : ''">
                    <p>Scroll Down</p>
                    <span class="icon material-symbols-outlined">
                        expand_more
                    </span>
                </div>
            </div>
        </div>
        <hr data-aos="fade-up">
        <div class="box-left box" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="500" ref="top">
            <h2>About Us:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
        </div>
        <div class="filler2"></div>
        <div class="box-right box" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
            <h2>About Us:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
        </div>
        <div class="filler2"></div>
        <div class="box-left box" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
            <h2>About Us:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
        </div>
        <div class="filler2"></div>
        <div class="box-right box" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="100">
            <h2>About Us:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
        </div>
        <div id="filler"></div>
    </main>
</template>

<style scoped>
hr {
    margin-bottom: 7rem;
    width: 80%;
}

#scroll {
    position: relative;
    top: 30vh;
    font-size: 1.5rem;
    transition-duration: 1s;
}

.up {
    transform: translateY(-30vh);
    opacity: 0;
}

#scroll .icon {
    font-size: 4rem;
    animation: shake 5s infinite;
    animation-duration: 2s;
}

#school {
    font-size: 3rem;
}

[data-aos='fade-right'] {
    transform: translate3d(-50vh, 0, 0);
}

[data-aos='fade-left'] {
    transform: translate3d(50vh, 0, 0);
}

.heading {
    color: aliceblue;
    height: 100vh;
}

#titles {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.box-left {
    left: 20%;
}

.box-right {
    left: 50%;
}

.box {
    color: aliceblue;
    position: relative;
    padding: 1rem;
    border-radius: 2rem;
    border: 2px solid aliceblue;
    background-color: rgb(70, 70, 70);
    width: 30%;
}

.box p {
    margin-left: 2rem;
}

#filler {
    height: 100vh;
}

.filler2 {
    height: 15vh;
}

@keyframes shake {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(1.5rem);
    }

    100% {
        transform: translateY(0);
    }
}</style>