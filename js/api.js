"use strict";

// prompt("hello");

// let btnOpenModal = document.querySelector(".show-modal");
// let btnCloseModal = document.querySelector(".close-modal");
// let modalBox = document.querySelector(".modal-box");
// let modalOverlay = document.querySelector(".overlay");
// //
// //
// btnOpenModal.addEventListener("click", function () {
//   modalBox.classList.remove("hidden");
//   modalOverlay.classList.remove("hidden");
// });
// //
// btnCloseModal.addEventListener("click", function () {
//   modalBox.classList.add("hidden");
//   modalOverlay.classList.add("hidden");
// });

// CURRENCY CONVERTER cC API

// "docs": "https://frankfurter.dev",
// "source": "https://github.com/lineofflight/frankfurter"

// 1. Grab all the HTML elements we need to track
const amountInput = document.getElementById("amountInput");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultOutput = document.getElementById("resultOutput");

// 2. Core conversion function
function convertCurrency() {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  // Safety check: If the input field is empty or negative, reset to 0.00
  if (!amount || amount <= 0) {
    resultOutput.innerText = "0.00";
    return;
  }

  // Optimization check: If "From" and "To" currencies match, don't ping the API!
  // This avoids API connection errors for 1-to-1 matching currencies.
  if (from === to) {
    resultOutput.innerText = Number(amount).toFixed(2);
    return;
  }

  // Construct the clean direct-rate URL for the Frankfurter v2 API
  const url = `https://api.frankfurter.dev/v2/rate/${from}/${to}`;

  // Fetch the data from the API endpoint
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API response error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // The API provides the single base conversion rate (e.g., data.rate = 0.92)
      const finalRate = data.rate;

      // Calculate the conversion locally inside the user's browser
      const convertedAmount = amount * finalRate;

      // Update the screen and format it cleanly to two decimal places
      resultOutput.innerText = convertedAmount.toFixed(2);
    })
    .catch((error) => {
      console.error("Fetch Error details:", error);
      resultOutput.innerText = "Error";
    });
}

// 3. Attach Event Listeners so everything updates dynamically on input/changes
amountInput.addEventListener("input", convertCurrency);
fromCurrency.addEventListener("change", convertCurrency);
toCurrency.addEventListener("change", convertCurrency);

// 4. Fire the function immediately when the page finishes loading
convertCurrency();

//
//
//
// JOKES API ***************************************
let askJokeBtn = document.getElementById("getJoke");
let jokeList = document.getElementById("jokeList");

// EventListenner - triggers the event
// (the event does load randomly)
//  trigger the event --> fires off the function
askJokeBtn.addEventListener("click", function () {
  // core API --> asking another server for data
  // API's URL was tested before in POSTMAN
  // fetch(...) --> sends an asynchronous HTTP request across the internet to the URL provided
  // fetch returns a Promise --> data will arrive soon
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      // the .then() chain --> to tell javascript what to do after the server responds
      // when the server answers, it sends back a raw response object (including headers, status codes...)
      // response.json extracts the data body from that response and translates it into a clean Javascript Object we can actually use
      // it passes the translated data to the next .then() --> .then((data) => {...})
      // if you could peek inside this data, it looks like: {"setup": "joke question - for eg ?", "punchline": "because.. joke answer."}
      //
      // creating the UI element
      // document.createElement("li")  --> creates a brand new empty <li> element in javacript memory --> it doesn't exist on the webpage yet
      let li = document.createElement("li");
      li.innerText = data.setup + " ... " + data.punchline;

      // .innerText = ... --> fills our new <li> element with text
      // data.setup --> the setup of hte joke,
      // glues a "..." string to the middle and appends data.punchline to the end
      //
      //
      jokeList.appendChild(li);
      // this takes our newly created text-filled <li> and drops it inside the <ul> element (jokeList) on the page
    });
  // everytime the button is clicked - the entire cycle runs again, a new request --> a new joke
});
