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
// SLIDER BUY SESSION TICKET//
// function initBuySessionSlider() {
//   const slider = document.querySelector(".buySessionSlider");
//   const prevBtn = document.querySelector(".arrow-left");
//   const nextBtn = document.querySelector(".arrow-right");

//   if (!slider || !prevBtn || !nextBtn) return;

// The 3 panels: .movieInfoSlider, .seatsSlider, .buyTicketSlider
// const panels = slider.children;
// let current = 0;

// function goTo(index) {
//   current = Math.max(0, Math.min(index, panels.length - 1));
//   slider.style.transform = `translateX(-${current * 100}%)`;
//   updateButtonState();
// }

// Grey out / disable an arrow when there's nowhere left to go
// function updateButtonState() {
//   prevBtn.classList.toggle("is-disabled", current === 0);
//   nextBtn.classList.toggle("is-disabled", current === panels.length - 1);
// }

// nextBtn.addEventListener("click", () => goTo(current + 1));
// prevBtn.addEventListener("click", () => goTo(current - 1));

// updateButtonState(); // set correct state on page load
// }

// document.addEventListener("DOMContentLoaded", initBuySessionSlider);
