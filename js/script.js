

const navIcon = document.querySelector(".nav-icon")
const navIcon_i = document.querySelector(".icon-i")
const nav_display = document.querySelector('.nav')
const headerText  = document.querySelector('.container header .header-text h1')
const direction_call_p = document.querySelector('.box-get-touch-contact-direction-call p')
const nav_item = document.querySelectorAll(".nav-items .nav-links")
const toggler_x = document.querySelector(".toggler_x")



navIcon.addEventListener("click",function () {
  // showing the nav bar 
  nav_display.classList.toggle('nav-active') 
     
    //  toggle the close icon 
  if (navIcon_i.classList.contains('fa-bars')) {
       navIcon_i.classList.toggle("fa-xmark")
     }   
})



// hiding when the links is clicked
nav_item.forEach(item => {
item.addEventListener('click', function(){

    if (nav_display.classList.contains('nav-active') && navIcon_i.classList.contains('fa-xmark')) {
      nav_display.classList.remove('nav-active') 
      navIcon_i.classList.remove("fa-xmark")
    } 
})
 
});


// change header text 
headerText.innerHTML= " architecture, Engineering & design firm";
// direction_call_p.innerHTML=`  1 (234)567-891${<br/>}  1 (234)987-654 `

