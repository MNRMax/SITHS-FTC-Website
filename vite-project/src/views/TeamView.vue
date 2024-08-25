<template>
 <div id="page1container">
    <div id="gap"></div>
    <div id="tpage1">
<!--We are Vault.

Meet the team.

resim
Ad 
title
4'erden 12 kişi total<br><br><br><br>
<img src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" class="background-image">-->
<br>
<div class="container">
  <div class="meetteam">
    <h2>MEET THE TEAM</h2>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat id tellus ac posuere. Ut eget risus ultrices, euismod augue sed, </span>
  </div>
</div>
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
    /* background-color: wheat; */
    /* background-image: url('https://media.discordapp.net/attachments/1026191356646932591/1269096847285420082/image.png?ex=66aed20b&is=66ad808b&hm=cf7be8ee22f6b649fa9bd78812a62ed19f07c38907a5921075a47d8a3f7f0c6f&=&format=webp&quality=lossless&width=621&height=662'); */
    z-index: -10;
}
#tpage1{
  overflow-x: hidden;
  display: flex;
  height: calc(100vh - 65px);
  position: relative;
  background-color: gainsboro;
}



.container{
    width: 100%;}
.meetteam{
  position:relative;
  font: 400 2.5rem "Plus Jakarta Sans", sans-serif;
  text-align:center;
  width:60%;
  margin: 0px;
 margin-left: auto;
 margin-right: auto;
}

.meetteam:after{
  content:'';
  display:table;
  position: absolute;
  background-color:#a5a5a3;
  width:100px;
  height:1px;
  bottom:-30px;
  left:50%;
  margin-left:-50px;
  color:red;
  right:0;
}

.meetteam > h2{
  font-weight:bold;
}

.meetteam > span{
  font: italic 400 18px 'Open Sans', sans-serif;
  text-align:center;
  color:#a5a5a3;
}

.profile-card{
  margin-bottom:60px;
  text-align:center;
  /* webkit-filter: grayscale(90%); */
  filter: grayscale(90%);
  transition: all .5s;
}

.profile-card:hover{
  /* webkit-filter: grayscale(0%); */
  filter: grayscale(0%);
}

.profile-card > img {
  width:150px;
  height:150px;
  display:block;
  margin:0 auto;
  border-radius:100%;
  transition: all .5s;
}

.profile-card > div > a.fa{
  color:#007bb5;
  text-decoration:none;
  font-size:22px;
  left:-25px;
  position:absolute;
  top:18px;
  opacity:0;
  transition: all .5s;
}

.profile-card:hover > div > a.fa{
  left:0px;
  opacity:1;
}

.profile-card > div{
  display:table;
  text-align:left;
  margin:0 auto;
  width:150px;
  position:relative;
  transition: all .5s;
}

.profile-card:hover > div{
  display:table;
  transition:all .5s;
  text-align:left;
  margin:0 auto;
  width:150px;
  position:relative;
  padding-left:25px;
}

.profile-card > div > h2,
.profile-card > div > h3{
  font: 400 12px 'Open Sans', sans-serif;
  position:relative;
  margin:0;
  color:#212121;
  white-space:nowrap;
}

.profile-card > div > h2{
  font-weight: 700;
  margin:10px 0 3px 0;
  transition:all .5s;
}

.profile-card:hover > div > h2{
  color:#007bb5;
}

</style>

<script setup>

</script>