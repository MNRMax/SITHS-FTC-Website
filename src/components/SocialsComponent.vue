<template>
    <div class="flex" :class="horizontal?'gap-3':'flex-col'">
        <div>
            <a href="https://instagram.com/sithsftc/">
                <img src="/images/insta.png" alt="Instagram" class="w-[3rem] h-[3rem]" />
            </a>
        </div>
        <div>
            <a href="mailto:sithsftc@gmail.com">
                <img src="/images/email.png" alt="Email" class="w-[2.7rem] h-[2.7rem] m-[0.15rem]" />
            </a>
        </div>
        <div>
            <a href="https://www.tiktok.com/@siths.mercury">
                <img src="/images/tiktok.png" alt="TikTok" class="w-[3rem] h-[3rem]" />
            </a>
        </div>
        <div>
            <a href="https://youtube.com/@sithsftc">
                <img src="/images/youtube.png" alt="Youtube" class="w-[3rem] h-[3rem]" />
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    horizontal: Boolean
})
</script>