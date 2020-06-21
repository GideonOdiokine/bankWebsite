var burger=document.getElementById("burger");
var navLinks=document.querySelector("#nav")
var closeBtn= document.querySelector("#closeBtn")
burger.addEventListener("click", function(){
    navLinks.classList.toggle('open')
})


// code for fix navbar
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
 
 function fixNav(){
     // console.log(topOfNav)
     if(window.scrollY>=topOfNav){
         document.body.classList.add('fixedNav')
         
     }else{
         document.body.classList.remove('fixedNav')
     }
 }
window.addEventListener('scroll', fixNav);
