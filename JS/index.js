// Declaration
const profile = document.getElementById("profilePic");
const menu = document.getElementById("accountMenu");

const arrOfImgs = document.getElementsByClassName("carousel-item");

const sliderNextBtn = document.getElementsByClassName(
  "carousel-control-next"
)[0];
const sliderPrevBtn = document.getElementsByClassName(
  "carousel-control-prev"
)[0];

const nextButtonSpan = sliderNextBtn.querySelector("span");
const prevButtonSpan = sliderPrevBtn.querySelector("span");

const sliderDotsBox = document.getElementsByClassName("carousel-indicators")[0];
const silderDots = sliderDotsBox.querySelectorAll("button");

// Account Menu Logic

profile.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
