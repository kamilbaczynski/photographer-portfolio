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

const listItems = document.querySelectorAll('.project-type__list-item');
const allImages = document.querySelectorAll('.project-photos__list-item');

function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleImages(dataClass){
  for(let i = 0; i<allImages.length; i++)
  allImages[i].dataset.class === dataClass ? allImages[i].style.display = 'inline-block' : allImages[i].style.display = 'none';
}
 
for(let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('click', function(){
    toggleActiveClass(listItems[i]);
    toggleImages(listItems[i].dataset.class);
  });
}
