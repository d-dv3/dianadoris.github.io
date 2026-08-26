"use strict";
// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".slider");
//   const slides = document.querySelectorAll(".slidersRow");
//   const btnLeft = document.querySelector(".chevron-left");
//   const btnRight = document.querySelector(".chevron-right");
//   //
//   //
//   const openModalBtn = document.querySelector(".OpenModal");
//   openModalBtn.addEventListener("click", openModal);
//   //   add because modal's display:none
//   const modalOverlay = document.querySelector(".modalOverlay");

//   let currentSlide = 0;
//   let slideWidth = 0; // will be set once modal is visible
//   const maxSlide = slides.length;

//   //   const slideWidth = slides[0].offsetWidth + 16; // 32rem + 1.6rem margin

//   const goToSlide = (i) => {
//     slider.style.transform = `translateX(-${i * slideWidth}px)`;
//   };

//   //   recalculate every time the modal opens
//   function openModal() {
//     modalOverlay.classList.add("active");
//     slideWidth = slides[1].offsetLeft - slides[0].offsetLeft;
//     currentSlide = 0;
//     goToSlide(currentSlide);
//   }
document.querySelectorAll(".chevron-right").forEach((btn) => {
  btn.addEventListener("click", () => {
    const slider = btn.closest(".modalOverlay").querySelector(".slider");
    const slides = btn.closest(".modalOverlay").querySelectorAll(".slidersRow");
    let current = parseInt(slider.dataset.currentSlide, 10);
    const width = parseInt(slider.dataset.slideWidth, 10);
    if (current < slides.length - 1) {
      current++;
      slider.style.transform = `translateX(-${current * width}px)`;
      slider.dataset.currentSlide = current;
    }
  });
});

document.querySelectorAll(".chevron-left").forEach((btn) => {
  btn.addEventListener("click", () => {
    const slider = btn.closest(".modalOverlay").querySelector(".slider");
    let current = parseInt(slider.dataset.currentSlide, 10);
    const width = parseInt(slider.dataset.slideWidth, 10);
    if (current > 0) {
      current--;
      slider.style.transform = `translateX(-${current * width}px)`;
      slider.dataset.currentSlide = current;
    }
  });
});
//   btnRight.addEventListener("click", () => {
//     if (currentSlide < maxSlide - 1) goToSlide(++currentSlide);
//   });

//   btnLeft.addEventListener("click", () => {
//     if (currentSlide > 0) goToSlide(--currentSlide);
//   });
// });
document.querySelectorAll(".chevron-right").forEach((btn) => {
  btn.addEventListener("click", () => {
    const slider = btn.closest(".modalOverlay").querySelector(".slider");
    const slides = btn.closest(".modalOverlay").querySelectorAll(".slidersRow");
    let current = parseInt(slider.dataset.currentSlide, 10);
    const width = parseInt(slider.dataset.slideWidth, 10);
    if (current < slides.length - 1) {
      current++;
      slider.style.transform = `translateX(-${current * width}px)`;
      slider.dataset.currentSlide = current;
    }
  });
});

document.querySelectorAll(".chevron-left").forEach((btn) => {
  btn.addEventListener("click", () => {
    const slider = btn.closest(".modalOverlay").querySelector(".slider");
    let current = parseInt(slider.dataset.currentSlide, 10);
    const width = parseInt(slider.dataset.slideWidth, 10);
    if (current > 0) {
      current--;
      slider.style.transform = `translateX(-${current * width}px)`;
      slider.dataset.currentSlide = current;
    }
  });
});
