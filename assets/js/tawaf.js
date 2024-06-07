const counterValueElement = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const circle = document.querySelector(".counter circle");
let counterValue = 0;
function updateCounter() {
  const max = 7;
  counterValueElement.innerText = counterValue;
  const circumference = 2 * Math.PI * 90;
  const offset = circumference - (counterValue / max) * circumference;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = offset;
}

document.addEventListener("DOMContentLoaded", function () {
  function incrementCounter() {
    if (counterValue < 7) {
      counterValue++;
      updateCounter();
    }
  }
  function decrementCounter() {
    if (counterValue > 0) {
      counterValue--;
      updateCounter();
    }
  }

  incrementBtn.addEventListener("click", incrementCounter);
  decrementBtn.addEventListener("click", decrementCounter);

  updateCounter();
});

// btns
const tawafBtn = document.querySelector("#tawaf-btn");
const saiiBtn = document.querySelector("#saii-btn");
const counterContainer = document.querySelector("#counterContainer");
counterContainer.classList.add("defult");

tawafBtn.addEventListener("click", () => {
  tawafBtn.classList.add("active");
  saiiBtn.classList.remove("active");
  counterContainer.classList.remove("defult");
  counterContainer.classList.remove("bg-2");
  counterContainer.classList.add("bg-1");
  counterValue = 0;
  updateCounter();
});

saiiBtn.addEventListener("click", () => {
  saiiBtn.classList.add("active");
  tawafBtn.classList.remove("active");
  counterContainer.classList.remove("defult");
  counterContainer.classList.remove("bg-1");
  counterContainer.classList.add("bg-2");
  counterValue = 0;
  updateCounter();
});

document.getElementById("duaBtn").addEventListener("click", function () {
  var myModal = new bootstrap.Modal(document.getElementById("duaModal"));
  myModal.show();
});

document.getElementById("manasikBtn").addEventListener("click", function () {
  var myModal = new bootstrap.Modal(document.getElementById("manasikModal"));
  myModal.show();
});
