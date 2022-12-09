document.body.className = "visible";

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




