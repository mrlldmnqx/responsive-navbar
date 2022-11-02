console.log("hello");

const toggleBtn = document.querySelector(".toggle-button");
const navList = document.querySelector(".nav-list");
toggleBtn.addEventListener("click", () => {
  navList.toggleAttribute("toggle");
  toggleBtn.toggleAttribute("toggle");
});
