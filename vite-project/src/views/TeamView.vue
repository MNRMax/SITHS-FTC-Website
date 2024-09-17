<template>
 <div id="page1container">
    <div id="gap"></div>
    <div id="tpage1">

    </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
#gap{
  width: 100%;  
  height: 65px;
  background-color:#2b2345;  font-family: "Plus Jakarta Sans", sans-serif ;
}


#page1container{
  position: absolute;
  overflow: scroll;
    width: 100%;
    /* height: calc(447.5vh - 65px); */
    left: 0;
    top: calc(0PX);
    
    z-index: -10;
}
#tpage1{
  overflow-x: hidden;
  display: flex;
  height: calc(100vh - 65px);
  position: relative;
  background-color: gainsboro;
}








</style>

<script setup>

</script>