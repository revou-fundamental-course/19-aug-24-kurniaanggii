// ini javascript

// hamburger menu
const navbarNav = document.querySelector(".nav-item");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// close hamburger menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// menampilkan nama sambutan
let name = prompt("Halo, siapa nama Anda?", "");
document.getElementById("name").innerHTML = name;

// Slider image
let sliders = document.querySelectorAll("slider");

// var sliderNav = function (manual) {
//   sliders[manual].classList.add("active");
// };

sliders.forEach(slider => {
  slider.addEventListener("click", () => {
    document.querySelectorAll('.slider-navigation .active').classList.remove('active');
    slider.classList.add('active');
 let src = slider.getAttribute('data-src');
 document.querySelectorAll
});
});


// Slider image
let slideIndex = 1;
showBanner(1);

function nextSlide(n) {
  showBanner((slideIndex += n));
}

function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName("banner-img");
  if (indexBanner > listImage.length) slideIndex = 1;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  listImage[slideIndex - 1].style.display = "block";
  console.log(listImage);
}

setInterval(function () {
  nextSlide(1);
}, 3000);