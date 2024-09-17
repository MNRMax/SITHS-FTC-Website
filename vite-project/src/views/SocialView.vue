<template>
    <div id="page1container">
       <div id="gap"></div>
       <div id="spage1">
        <!-- <div id="sp1t"> 
         <div id="h1stext"  data-aos="fade-down" data-aos-duration="750">
          <h1 id="wa">Our Socials</h1>
          <h2 id="waa">yt + blog updates</h2></div> 
        </div>  -->
        <div id="sp1c">
          <div id="sp1l"> 
     
        <iframe id="ytvid" autoplay muted loop :src=videoLink>
        </iframe>
      </div>
        <div id="sp1r"> 
         <div v-for="i in blogInfo" class="blogpost">
          <p class="blogText">{{ i.title }}</p>
          <div class="middleBlog">  
          <img :src="i.url" class="imageBlog">
        </div>
        <div class="bottomBlog">
          <img :src="i.authorI" class="cssMyBeloved">
          <p>{{ i.date }}</p>
        </div>
         </div>
      </div>
    </div>
    </div>
       </div>
   </template>
   
   <style>
   .cssMyBeloved{
    border-radius: 100%;
    height: 80%;
    margin: 10px
   }

   .bottomBlog{
    align-items: center;
    text-align: center;
    height: 20%;
    display: flex;
    flex-direction: row;
    width: 100%;
   }
   .middleBlog{
 height: 50%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
   }
   .imageBlog{
    height: 75%;
    width: auto;
   }
   .blogText{
    display: flex;
    height: 20%;
    text-align: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0px;
   }
   .blogpost{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    border-radius: 20px;
    margin: 20px;
    height: 80%;
    min-width: 300px; 
    border: 2px white solid;
   }
   #idkanymore{
    height: 25%;
    width: 100%;
    text-align: center;
   }
   #wa{
    text-decoration: underline;
    font-size: 3.25rem;
    margin: 0px;
    font-weight: 400;
   }
   #waa{
    font-size: 1.1rem;
    padding-top: 0px;
    margin: 0px;
    font-weight: 200;
   }
   #h1stext{
    /* height: 100%; */
    font-size: 2.4rem;
    width: 100%;
   }
   #sp1t{
    display: flex;
    align-items: center;
    justify-content: space-between;
   text-align: center;
    height: 17.5%;
    width: 100%;
   }
   #spage1{
    display: flex;
    flex-direction: column;
    overflow: auto;
   }
    
#sp1c{
  width: 100%;
  height: 100%;
  display: flex;
}
   #sp1r{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 60%;
    overflow: auto;
    background-color: rgba(244,0,233,0.3);
   }
   #sp1l{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 40%;
    background-color: rgba(0,0,233,0.3);
   }

   #socialCont1{
    height:75%;
    width: 100%;
    background-color: rgba(0,0,244,0.3);
   }
   #ytvid{
    width: 80%;  
    aspect-ratio: 16/9;
   }
   #gap{
     width: 100%;  
     height: 65px;
     background-color:#2b2345;
   }
   
   #page1container{
    font-family: "Plus Jakarta Sans", sans-serif ;
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
   #spage1{
     overflow-x: hidden;
     display: flex;
     height: calc(100vh - 65px);
     position: relative;
     background-color:crimson;
   }
   </style>
   
   <script setup>
   let videoLink = `https://www.youtube.com/watch?v=e2oSGMLmkjI`
   const loadVideo = () => {
        const cid = "UCKUZTBXGqLyQyeJiGAibRwA";
        const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
        const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
   
        fetch(reqURL)
            .then(response => response.json())
            .then(result => {
              videoLink = `https://www.youtube.com/embed/${result.items[0].link.substr(result.items[0].link.indexOf("=") + 1)}`
              document.getElementById('ytvid').setAttribute("src", videoLink);
            })
            .catch(error => console.log('error', error));
    }
    loadVideo()

    let blogInfo = [{
      title: 'Hello Winnie!',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tsJlbwuBC2jBGT4llDSBftZxNDkGVkI1YQ&s',
      date: '5/12/2008',
      subtitle: 'css makes me want to cry',
      authorI: `https://cdn.discordapp.com/attachments/1037850883024769034/1284636532908626021/Untitled29.png?ex=66e75a80&is=66e60900&hm=c244696c9b6394715b1ee8bee0af14f75f1908af7802d8c6785c742e030ba5cd&`,
      authorN: 'Gabarrel Liberal'
    },
    // {
    //   title: 'Hello Justin!',
    //   url: 'https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png',
    //   date: '9/8/2011',
    // },
  ]

   </script>
