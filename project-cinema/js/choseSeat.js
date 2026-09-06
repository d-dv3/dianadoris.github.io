"use strict";

const gridSeats = document.getElementById("gridSeats");
const seatList = document.getElementById("chosenSeatsList");
const selectedSeats = new Set();

const displayQtd = document.querySelector(".qtyPlaceholder p");
const displayPrice = document.querySelector(".tktPrice");
const pricePerTicket = 7;
const maxQty = 6;

gridSeats.addEventListener("click", (e) => {
  const btn = e.target.closest(".seatsBtn");
  if (!btn) return;

  const seatId = btn.id;

  if (selectedSeats.has(seatId)) {
    selectedSeats.delete(seatId);
    btn.classList.remove("selected");
  } else {
    if (selectedSeats.size >= maxQty) {
      return; // max qty tickets
    }
    selectedSeats.add(seatId);
    btn.classList.add("selected");
  }

  renderSeatList();
  updateTktCalculator();
});

function renderSeatList() {
  seatList.innerHTML = "";
  selectedSeats.forEach((seatId) => {
    const li = document.createElement("li");
    li.textContent = seatId;
    seatList.appendChild(li);
  });
}

function updateTktCalculator() {
  const qty = selectedSeats.size;
  displayQtd.textContent = qty;
  displayPrice.textContent = qty * pricePerTicket;
}

updateTktCalculator(); // reset om
