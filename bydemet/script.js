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


/*Automatisk slideshow på behandlings siden*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//FAQ side eventlistner + for løkke
var faq = document.getElementsByClassName("faq-spm");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
       /* Toggler mellem tilføje og remove "active" class,
        for at vise arrow up og minus knapperne */
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




