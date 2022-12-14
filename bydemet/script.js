//Onscroll fade in animation ved instagram sektion på index side
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 0 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}
$(window).scroll(function() {
        showImages('#follow2');
});

//FAQ side eventlistner + for løkke
var faq = document.getElementsByClassName("faq-spm");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
       /* Toggler mellem tilføje og remove "active" class,
        for at vise arrow up og down knapperne */
        this.classList.toggle("active");

        /* Toggler mellem at skjule og vise svar panel */
        var svar = this.nextElementSibling;
        if (svar.style.display === "block") {
            svar.style.display = "none";
        } else {
            svar.style.display = "block";
        }
    });
}




