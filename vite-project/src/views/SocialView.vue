<template>
    <div id="page1container">
       <div id="gap"></div>
       <div id="spage1">

    </div>
       </div>
   </template>
   
   <style>

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
  //  let videoLink = `https://www.youtube.com/watch?v=e2oSGMLmkjI`
  //  const loadVideo = () => {
  //       const cid = "UCKUZTBXGqLyQyeJiGAibRwA";
  //       const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
  //       const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
   
  //       fetch(reqURL)
  //           .then(response => response.json())
  //           .then(result => {
  //             videoLink = `https://www.youtube.com/embed/${result.items[0].link.substr(result.items[0].link.indexOf("=") + 1)}`
  //             document.getElementById('ytvid').setAttribute("src", videoLink);
  //           })
  //           .catch(error => console.log('error', error));
  //   }
  //   loadVideo()

    let blogInfo = [{
      title: 'Hello Winnie!',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tsJlbwuBC2jBGT4llDSBftZxNDkGVkI1YQ&s',
      date: '5/12/2008',
      subtitle: 'css makes me want to cry',
      authorI: `https://cdn.discordapp.com/attachments/1037850883024769034/1284636532908626021/Untitled29.png?ex=66e75a80&is=66e60900&hm=c244696c9b6394715b1ee8bee0af14f75f1908af7802d8c6785c742e030ba5cd&`,
      authorN: 'Gabarrel Liberal'
    },
  ]

   </script>
