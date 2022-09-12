// Menu show Y hidden 
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
console.log(navMenu)
// Menu show 
// validate if y is constant is exist
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-menu')
    })
}
// Menu hid 
// validate if constant is exist 
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


// remove menu mobile 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(element => {
    element.addEventListener('click',linkAction)
});