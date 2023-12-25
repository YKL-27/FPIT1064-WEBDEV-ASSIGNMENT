let slideNo = 1;
showSlide(slideNo);
autoRunSlide();

// Change to the next slide
function plusSlide(n){
    showSlide(slideNo += n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName("product-slide");
    // slides = array of elements with the class name "product-slide"

    if(slideNo > slides.length){slideNo = 1;}
    // If exceed length, set back to first (1) image
    if(slideNo < 1){slideNo = slides.length;}
    // If smaller than first (1), set to last image

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" active", "")
    }
    // For every slide in slides, hide it.

    slides[slideNo - 1].style.display = "block";
    // Set the current slide as block display to show the image
    // slideNo - 1 is used cuz the index is actually starts with 0
}

// Automatic switch to the next slide every 5000ms (5 seconds)
function autoRunSlide(){
    setInterval(function(){
        plusSlide(1);
    }, 5000)
}