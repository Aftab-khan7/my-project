

//  ------------------  Header  ============================
const mobBtn = document.getElementById("mobBtn");
const headerContent = document.getElementById("header");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const mobContent = document.getElementById("mobilecontent");

mobBtn.addEventListener("click", responsivefmob);

function responsivefmob(){

    menu.classList.toggle("active");
    nav.classList.toggle("active");
    mobContent.classList.toggle("active");
};



//  ------------------  Hero Section ============================

const slides = document.querySelectorAll(".slider");
const navButton = document.getElementById("navBtn");
const previewButton = document.querySelector(".prev-btn");
const  sliderContainer = document.querySelector(".hero-slider");

let currentIndex = 0;


navButton.addEventListener("click" , nextSlide);

function nextSlide (){
    slides[currentIndex].classList.remove("active");
    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    slides[currentIndex].classList.add("active");

} 
let slideInterval =  setInterval(nextSlide, 3000);


sliderContainer.addEventListener("mouseenter", function(){
    clearInterval(slideInterval);
});
sliderContainer.addEventListener("mouseleave", function(){
    slideInterval = setInterval(nextSlide, 3000);
});


previewButton.addEventListener("click", previewSlide);

function previewSlide(){
    slides[currentIndex].classList.remove("active");
    currentIndex--;
    if ( currentIndex < 0 ){
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].classList.add("active");
}

//  ------------------  Hero Section ============================




//  ------------------  Hero Section ============================




//  ------------------  Hero Section ============================




//  ------------------  Hero Section ============================
