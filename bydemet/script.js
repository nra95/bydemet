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