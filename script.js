let slideIndex = 1;
showSlides(slideIndex);

// next/prev buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log("yeet");
    }
    for (i = 0; i < dots.length; i++) {
        let className;
        dots[i].className = dots[i].className.replace(" active", "");
        console.log("yeetocheeto");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     slides = document.getElementById("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000);
// }