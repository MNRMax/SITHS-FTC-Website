<script setup>

</script>

<template>
  <div id="shootiforgotaboutthebackgroundunderthenavbar">
    <div id="gap"></div>
      <div id="start"></div>
      <div id="page1"></div>
</div>
</template>

<style scoped>
#shootiforgotaboutthebackgroundunderthenavbar{
  position: absolute;
  overflow: scroll;
    width: 100%;
    height: calc(300vh);
    left: 0;
    top: calc(0PX);
    /* background-color: wheat; */
    background-image: url('https://media.discordapp.net/attachments/1026191356646932591/1269096847285420082/image.png?ex=66aed20b&is=66ad808b&hm=cf7be8ee22f6b649fa9bd78812a62ed19f07c38907a5921075a47d8a3f7f0c6f&=&format=webp&quality=lossless&width=621&height=662');
    z-index: -10;
}

#gap{
  width: 100%;
  height: 65px;
  background-color: yellowgreen;
}

#page1{
  height: calc(100vh - 65px);
  background-image: radial-gradient(skyblue,teal);
}
</style>