AOS.init();

import AOS from 'aos';

window.addEventListener("DOMContentLoaded", () => {

const hero = document.getElementById(tidcent);
hero.setAttribute('data-aos', 'fade-up');

    AOS.init({
        initClassName: "aos-init",
        startEvent: "DOMContentLoaded",
    });
});

document.body.className = "visible";

//FAQ side onclick event
var tag = document.getElementById('svar1');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('Svar');
});








