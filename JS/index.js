// Declaration
const profile = document.getElementById("profilePic");
const menu = document.getElementById("accountMenu");

// Account Menu Logic

profile.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
