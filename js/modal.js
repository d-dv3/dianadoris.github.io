"use strict";

document.querySelectorAll(".btnOpenModal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const modal = document.getElementById(targetId);
    modal.classList.add("active");

    // --- slider recalculation, scoped to THIS modal ---
    const slider = modal.querySelector(".slider");
    const slides = modal.querySelectorAll(".slidersRow"); // ⚠ confirm this matches your HTML
    if (slider && slides.length > 1) {
      const slideWidth = slides[1].offsetLeft - slides[0].offsetLeft;
      slider.style.transform = `translateX(0px)`;
      slider.dataset.slideWidth = slideWidth; // stash it for the arrow buttons to read
      slider.dataset.currentSlide = 0;
    }
  });
});

document.querySelectorAll(".btnCloseModal").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modalOverlay").classList.remove("active");
  });
});

document.querySelectorAll(".modalOverlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
});
// MODAL VIDEO
const modalVideo = document.getElementById("myVideoModal");
const video = modalVideo.querySelector("video");
const closeVideoModalBtn = modalVideo.querySelector(".closeModalVideo");

function closeMv() {
  modalVideo.style.display = "none";
  video.pause();
  video.currentTime = 0;
}
closeVideoModalBtn.addEventListener("click", closeMv);
//
window.addEventListener("click", (e) => {
  if (e.target === modal) closeMv();
});
