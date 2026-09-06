"use strict";

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
//
//
//
//
//
//
//
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
