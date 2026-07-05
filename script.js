/*=========================================
EARTHVIA
PREMIUM SCRIPT
PART 1
=========================================*/

/*=========================
PRELOADER
=========================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

setTimeout(()=>{

loader.style.display="none";

},700);

});


/*=========================
CUSTOM CURSOR
=========================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


/*=========================
STICKY HEADER
=========================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.padding="18px 7%";

header.style.background="rgba(255,255,255,.85)";

header.style.backdropFilter="blur(18px)";

}

else{

header.style.padding="28px 7%";

header.style.background="transparent";

}

});


/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*=========================================
EARTHVIA
PREMIUM SCRIPT
PART 2
=========================================*/

/*=========================
SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(

".about,.collection,.process,.reviews,.contact,.premium-banner,.product-card,.review-card,.feature,.process-card"

);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

revealElements.forEach((item)=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/*=========================
PRODUCT HOVER
=========================*/

document.querySelectorAll(".product-card").forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.transform =

`perspective(900px)
rotateY(${(x-rect.width/2)/18}deg)
rotateX(${-(y-rect.height/2)/18}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*=========================
PARALLAX HERO
=========================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-image");

if(hero){

hero.style.transform=`translateY(${window.scrollY*0.12}px)`;

}

});


/*=========================
BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn-primary,.about-btn,.nav-btn").forEach((btn)=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=e.offsetX-d/2+"px";

circle.style.top=e.offsetY-d/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
/*=========================================
EARTHVIA
PREMIUM SCRIPT
PART 3 (FINAL)
=========================================*/

/*=========================
ACTIVE NAVBAR
=========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*=========================
PROGRESS BAR
=========================*/

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.background="#284b38";
progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});


/*=========================
FLOATING EFFECT
=========================*/

document.querySelectorAll(".feature").forEach((box,index)=>{

setInterval(()=>{

box.style.transform="translateY(-8px)";

setTimeout(()=>{

box.style.transform="translateY(0px)";

},800);

},3000+(index*400));

});


/*=========================
IMAGE FADE
=========================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.style.transition=".6s";

img.addEventListener("load",()=>{

img.style.opacity="1";

});

});


/*=========================
CONSOLE MESSAGE
=========================*/

console.log("%cEarthvia Premium Website",
"color:#284b38;font-size:22px;font-weight:bold;");

console.log("%cDesigned with ❤️",
"color:#b5965d;font-size:16px;");

