document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const navMenu = document.querySelector("header nav ul");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
