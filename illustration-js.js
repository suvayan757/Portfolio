
gsap.registerPlugin(ScrollTrigger);

function loader() {
    document.querySelector(".load").style.display = "none";
}


let mnav = document.getElementById("mobile-nav");
let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
let body = document.querySelector("body");
let access = document.querySelector("#access");
let hb = document.querySelector(".hb");
let cross = document.querySelector("#crs");
let backToMain = document.querySelector(".back-to-main");
let lightBox = document.querySelector(".lightbox");
let featuringImage = document.querySelectorAll(".featuring-image");

backToMain.addEventListener('click',()=>{
    lightBox.style.transition="0.3s ease";
    lightBox.style.height="0vh";
    lightBox.style.width="0vw";
    lightBox.style.opacity="0";
    body.style.overflowY="scroll"
    backToMain.style.zIndex="-1";
    setTimeout(()=>{
        lightBox.style.display="none";
    }, 1000);
})
console.log(featuringImage);

featuringImage.forEach((element)=>{

    element.addEventListener('click',()=>{
        lightBox.style.display="flex";
            lightBox.style.transition="0.3s ease";
            lightBox.style.height="100vh";
            lightBox.style.width="100vw";
            lightBox.style.opacity="1";
            lightBox.style.zIndex="500";
            let x = parseInt(element.id);
            currentSlide(x);
            body.style.overflowY="hidden"
            backToMain.style.zIndex="99999";
    })
})

$("#0").click(function() {        
    $('html, body').animate({
        scrollTop: $("#lightbox").offset().top
    }, 1000);

});
$("#1").click(function() {
    $('html, body').animate({
        scrollTop: $("#lightbox").offset().top
    }, 1000);
});
$("#2").click(function() {
    $('html, body').animate({
        scrollTop: $("#lightbox").offset().top
    }, 1000);
});
$("#3").click(function() {
    $('html, body').animate({
        scrollTop: $("#lightbox").offset().top
    }, 1000);
});
$("#4").click(function() {
    $('html, body').animate({
        scrollTop: $("#lightbox").offset().top
    }, 1000);
});
$("#5").click(function() {
    $('html, body').animate({
        scrollTop: $("#lightbox").offset().top
    }, 1000);
});




hb.addEventListener('click', () => {
    mnav.style.transform = 'translateY(0%)';
    hb.classList.remove("hb");
    access.style.display = "none";
    cross.style.display = "inline-block"
    x = navbar.style.backgroundColor;
    navbar.style.backgroundColor = 'white';
    navbar.style.borderBottom="1px solid var(--black)"
    navbar.style.boxShadow = 'none';
    logo.style.backgroundImage = "url('logo-b.png')";
    navbar.style.position="fixed";
});

cross.addEventListener('click', () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.borderBottom="none"
    // navbar.style.boxShadow = '0px 0px 16px 10px rgb(19 19 19)';
    navbar.style.backgroundColor = x;
    logo.style.backgroundImage = "url('logo-w.png')";
});

let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let n3 = document.querySelector('#n3');
let n4 = document.querySelector('#n4');
let n5 = document.querySelector('#n5');
n1.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n2.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n3.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n4.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n5.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
//   console.log(slides)
//   console.log(dots)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

