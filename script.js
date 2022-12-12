const hamburgerButton = document.querySelector(".hamburger-button");
const closeButton = document.querySelector(".close-button");
const headerNav = document.querySelector(".header-nav");
const carouselItem = document.querySelectorAll(".carousel-item");
const nextCarousel = document.querySelector(".next");
const prevCarousel = document.querySelector(".prev");

let carouselCount = 0;

for (let index = 0; index < carouselItem.length; index++) {
  carouselItem[index].style.display = "none";
}

carouselItem[0].style.display = "flex";


hamburgerButton.onclick = () => {
  headerNav.classList.toggle("show-nav");
}

closeButton.onclick = () => {
  headerNav.classList.toggle("show-nav");
}

nextCarousel.onclick = () => {
  carouselCount++;
  if (carouselCount > 2) {
    carouselCount = 0; 
  }
  for (let index = 0; index < carouselItem.length; index++) {
    carouselItem[index].style.display = "none";
  }
  carouselItem[carouselCount].style.display = "flex";
}

prevCarousel.onclick = () => {
  carouselCount--;
  if (carouselCount < 0) {
    carouselCount = 2;
  }
  for (let index = 0; index < carouselItem.length; index++) {
    carouselItem[index].style.display = "none";
  }
  carouselItem[carouselCount].style.display = "flex";
}