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

// -------------------------- ACCORDION 
const skillsContent = document.getElementsByClassName("skill_content"),
        skillsHeader = document.querySelectorAll('.skill_header')

function toggleSkill(){
    let itemClass = this.parentNode.className
    for(let i = 0 ; i < skillsContent.length ; i++){
        skillsContent[i].className = "skill_content skill_close"
    }
    if(itemClass == "skill_content skill_close"){
        this.parentNode.className = "skill_content skill_open"
    }
}

skillsHeader.forEach((e)=>{
    e.addEventListener('click',toggleSkill)
})

// qualification tabs

const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tab.forEach(tab=>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })

// services
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')
    
      let modal = function (modalClick){
        modalViews[modalClick].classList.add('active-modal')
      }
      modalBtns.forEach((modalBtn , i)=>{
        modalBtn.addEventListener('click',()=>{
            // console.log('g')
            modal(i)
        })});

      modalCloses.forEach((modalClose)=>{
         modalClose.addEventListener('click',()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove('active-modal')
            })
         })
      })
// ================================= portfolio swiper ================================

let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop : true ,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
    // mousewheel: true,
    // keyboard: true,
  });