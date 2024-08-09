<template>
    
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Footer Design</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
</head>
<body>

  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Contact Captains</h4>
  	 			<ul>
  	 				<li>Sithssaturn@gmail.com</li>
  	 				<li>Winnier3@nycstudents.net</li>
  	 				<li>Ninac51@nycstudents.net</li>
  	 				<li>Jcolangelo3@schools.nyc.gov</li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Team Info</h4>
  	 			<ul>
  	 				<li><a href="https://ftc-events.pdx-prod.ftclive.org/2024/team/26195">Event History</a></li>
  	 				<li><a href="https://www.siths.org/apps/pages/index.jsp?uREC_ID=1554984&type=d&pREC_ID=1680743">SITHS Website</a></li>
  	 				<li><a href="#">Donations (WIP)</a></li>
  	 				<li><a href="https://github.com/SITHS-FTC">Github Repository</a></li>\
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Resources</h4>
  	 			<ul>
  	 				<li><a href="https://firstinspires.blob.core.windows.net/ftc/2024-25/Competition-Manual.pdf">'24-'25 FTC Manual</a></li>
  	 				<li><a href="https://docs.revrobotics.com/duo-control">REV Hub Documentation</a></li>
  	 				<li><a href="https://www.autodesk.com/products/inventor/free-trial">Inventor Download</a></li>
  	 				<li><a href="https://www.pitsco.com/Shop/TETRIX-Robotics/TETRIX-MAX-Parts-Packs">TETRIX Parts</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.tiktok.com/@siths.saturn?lang=en"><i class="fab fa-tiktok"></i></a>
  	 				<a href=""><i class="fab fa-twitter"></i></a>
  	 				<a href="https://www.instagram.com/sithssaturn/followers/"><i class="fab fa-instagram"></i></a>
  	 				<a href="https://www.youtube.com/@sithssaturn"><i class="fab fa-youtube"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
</html>

</template>

<script setup>

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

body{
	line-height: 1.5;
    font-family: "Plus Jakarta Sans", sans-serif ;
}
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}
.container{
	max-width: 1170px;
	margin:auto;
}
li{
    color:#bbbbbb;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background-color: #101010;
    font-family: "Plus Jakarta Sans", sans-serif ;
    padding: 30px 0;
    padding-bottom: 0px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #e91e63;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}




</style>