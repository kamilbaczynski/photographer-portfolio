"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

// Gallery filtering in section projects
const listItems = document.querySelectorAll('.project-section__project-type--list-item-js');
const allImages = document.querySelectorAll('.photo-list__list-item--js');

function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleImages(dataClass){

  for (let i = 0; i < allImages.length; i++)

  if (allImages[i].dataset.class === dataClass) {

    if (allImages[i].classList.contains('visible')) {
    } else {
      allImages[i].classList.add('visible');
      allImages[i].classList.remove('unvisible');
    }

  } else {

    if (allImages[i].classList.contains('visible')) {
      allImages[i].classList.add('unvisible');
      allImages[i].classList.remove('visible');
    } 

  }
}


// Second version

// allImages.forEach ( image => {
//   image.classList.remove('visible');
// });

// for (let i = 0; i < allImages.length; i++)
// if (allImages[i].dataset.class === dataClass) {
//   allImages[i].classList.add('visible');
// }


// First Version

// function toggleImages(dataClass){
//  for(let i = 0; i < allImages.length; i++)
//  if (allImages[i].dataset.class === dataClass) {
//    allImages[i].style.display = 'block'}
//  else {
//    allImages[i].style.display = 'none'
//  }
// }

for(let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('click', function(){
    toggleActiveClass(listItems[i]);
    toggleImages(listItems[i].dataset.class);
  });
}


// Slider in section slider

const leftButton = document.querySelector('.slider-section__button--left');
const rightButton = document.querySelector('.slider-section__button--right');
const sliderContainer = document.querySelector('.slider-section__slider-containter');
const dots = document.querySelectorAll('.labels-container__label--js');

const positions = ["left: 0", "left: -100%", "left: -200%", "left: -300%"];

var sliderPosition = 0;
checkedDot();

dots[0].addEventListener('click', function() {
  sliderContainer.style = `${positions[dots[0].dataset.pos]}`
  sliderPosition = 0;
  checkedDot();
})
dots[1].addEventListener('click', function() {
  sliderContainer.style = `${positions[dots[1].dataset.pos]}`
  sliderPosition = 1;
  checkedDot();
})
dots[2].addEventListener('click', function() {
  sliderContainer.style = `${positions[dots[2].dataset.pos]}`
  sliderPosition = 2;
  checkedDot();
})
dots[3].addEventListener('click', function() {
  sliderContainer.style = `${positions[dots[3].dataset.pos]}`
  sliderPosition = 3;
  checkedDot();
})

leftButton.addEventListener('click', function() {
  sliderPosition -= 1;
  if (sliderPosition < 0 ) { sliderPosition = 3}
  sliderContainer.style = `${positions[sliderPosition]}`
  checkedDot()
});

rightButton.addEventListener('click', function() {
  sliderPosition += 1;
  if (sliderPosition > 3 ) { sliderPosition = 0}
  sliderContainer.style = `${positions[sliderPosition]}`
  checkedDot()
});

function checkedDot() {
  dots.forEach( dot => {
    dot.classList.remove('checked')
  })
  dots[sliderPosition].classList.add('checked')
}


// FIRST VERSION SLIDER
// const leftButton = document.querySelector('.slider-section__button--left');
// const rightButton = document.querySelector('.slider-section__button--right');
// const sliderImages = document.querySelectorAll('.slider-list__list-item');

// var slideIndex = 1;
// showSlide();

// leftButton.addEventListener('click', function() {
//   slideIndex -= 1;
//   showSlide();
// });

// rightButton.addEventListener('click', function() {
//   slideIndex += 1;
//   showSlide();
// });

// function showSlide() {
//   var i;
//   if (slideIndex > sliderImages.length) {slideIndex = 1};
//   if (slideIndex === 0) {slideIndex = sliderImages.length};
//   for (i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = "none";
//   };
  
//   sliderImages[slideIndex - 1].style.display = "block";
// }