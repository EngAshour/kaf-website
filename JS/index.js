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

const selectAllBtn = document.querySelector(".select-all");
const arrAddons = Array.from(document.getElementsByClassName("addonsbtn"));

// Account Menu Logic

profile.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

// Slider buttons logic

function findActiveImgIndex() {
  return Array.from(arrOfImgs).findIndex((element) => {
    return element.classList.contains("active");
  });
}

function toggleButtons() {
  setTimeout(() => {
    const activeImgIndex = findActiveImgIndex(arrOfImgs);
    console.log("#", activeImgIndex);
    if (activeImgIndex === 0) {
      prevButtonSpan.classList.add("disable");
      prevButtonSpan.classList.remove("active");
      nextButtonSpan.classList.add("active");
      nextButtonSpan.classList.remove("disable");
    } else if (activeImgIndex === arrOfImgs.length - 1) {
      prevButtonSpan.classList.remove("disable");
      prevButtonSpan.classList.add("active");
      nextButtonSpan.classList.remove("active");
      nextButtonSpan.classList.add("disable");
    } else {
      prevButtonSpan.classList.add("active");
      nextButtonSpan.classList.add("active");
      prevButtonSpan.classList.remove("disable");
      nextButtonSpan.classList.remove("disable");
    }
  }, 700);
}

sliderNextBtn.addEventListener("click", toggleButtons);
sliderPrevBtn.addEventListener("click", toggleButtons);

Array.from(silderDots).forEach((dot) => {
  dot.addEventListener("click", toggleButtons);
});

// Add ons select all logic

selectAllBtn.addEventListener("click", () => {
  arrAddons.forEach((addon) => {
    addon.setAttribute("checked", "");
  });
});

Array.from(arrAddons).forEach((addon) => {
  addon.addEventListener("change", () => {
    if (!addon.hasAttribute("checked")) {
      addon.setAttribute("checked", "");
    } else {
      addon.removeAttribute("checked");
    }
  });
});

