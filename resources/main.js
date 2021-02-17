'use strict';


let seeMenu = document.getElementById('seeMenu');
let removeMenu = document.getElementById('removeMenu');
let bodyWrapper = document.getElementById('bodyWrapper');
let mobileMenu = document.getElementById('mobileMenu');

seeMenu.addEventListener('click', function(){
    // nu ai nevoie de if in acest caz, pentru ca elementele respective sunt vizualizabile unic, nu exista ambiguitate
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
