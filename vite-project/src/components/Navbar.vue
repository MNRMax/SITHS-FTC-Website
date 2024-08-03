<script setup>

var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        console.log(window.pageYOffset)
      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos < currentScrollpos && window.pageYOffset > 65)  {
            document.getElementById("navbar").style.top = "-100px";
      } else {
            document.getElementById("navbar").style.top = "0px";
      }

      prevScrollpos = currentScrollpos;
      
      } 
</script>

<template>
<div class="nav" id="navbar">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
<div id="left">
 
    <img id="nblogo" src="https://i.imgur.com/bkc8Fmw.png">
    <p id="sithssaturn">SITHS Saturn</p>
</div>
<div id="right"></div>
  <div class="nav-links">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/team">Team</RouterLink>
    <RouterLink to="/social">Social</RouterLink>
    <RouterLink to="/options">Options</RouterLink>
  </div>    
</div>
<div id="push"></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#nblogo{
    height: 100%;
    margin: 5px;
    width: auto;
    
}

.nav {
  height: 65px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}
#sithssaturn{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
}

#sithssaturn{
    font-weight: lighter;
}

.nav > .nav-header {
  display: inline;
}
#push{
  /* background-color: aqua; */
    height:55px
}

.nav > .nav-header > .nav-title {

  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav-btn{
    height:100%;
}
label{
    height:100%;
}
a{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
    font-weight: light;
    height: 50px;
    border-left: 1px solid white;
}
.nav  {
  display: inline;
  float: right;
  font-size: 18px;
}

 #left{
    display: flex;
    font-family: "Rajdhani", sans-serif;   
    color: white;
    align-items: center;
    height: 100%;
    width: 40%;
} 

.nav-links{
    width: 60%;
    justify-content: right;
    display:flex;
    
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}


.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
  

}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    /* width: 50px;
    height: 50px; */
    padding: 20px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #7273a5bf;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 65px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh + 50px);
    overflow-y: auto;
  }
}
#navbar {
      background-image: linear-gradient(#161130,#2b2345);
      position: fixed;
      display: flex;
      flex-direction: right;

      align-items: center;
      top: 0;
      left:0;
      width: 100%;
      transition: top 0.8s;
}



</style>
