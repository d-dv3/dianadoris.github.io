"use strict";

// prompt("hello");

// const uxUiOpenModal = document.querySelector(".b03aLink");
// const uxUiCloseModal = document.querySelector(".closeUxUiModal");
// const uxUiModalBox = document.querySelector(".uxUIModalBox");
// const uxUiModalOverlay = document.querySelector(".overlayUxUi");
// //
// //
// uxUiOpenModal.addEventListener("click", function () {
//   uxUiModalBox.classList.remove("hidden");
//   uxUiModalOverlay.classList.remove("hidden");
// });
// //
// uxUiCloseModal.addEventListener("click", function () {
//   uxUiModalBox.classList.add("hidden");
//   uxUiModalOverlay.classList.add("hidden");
// });

// data target modal2
// btnOpenModal

document.querySelectorAll(".btnOpenModal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    document.getElementById(targetId).classList.add("active");
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
