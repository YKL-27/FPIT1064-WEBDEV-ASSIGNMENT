let slideNo = 1;
showSlide(slideNo);

function plusSlide(n){
    showSlide(slideNo += n);
}

function currentSlide(n){
    showSlide(slideNo += n);
}

function showSlide(n){
    let i;
    let slide = document.getElementsByClassName("product-slide");
    
    if(n > slide.length){slideNo = 1;}
    if(n < 1){slideNo = slide.length;}

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for(i = 0; i < slide.length; i++){
        slide[i].className = slide[i].className.replace(" active", "")
    }

    slide[slideNo - 1].style.display = "block";
}