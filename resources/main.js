'use strict';


let seeMenu = document.getElementById('seeMenu');
let removeMenu = document.getElementById('removeMenu');
let bodyWrapper = document.getElementById('bodyWrapper');
let mobileMenu = document.getElementById('mobileMenu');

seeMenu.addEventListener('click', function(){
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        bodyWrapper.classList.add('hidden');
    } 
});

removeMenu.addEventListener('click', function(){
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            bodyWrapper.classList.remove('hidden');
        }
});
