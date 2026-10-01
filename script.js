document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

      mainNav.classList.toggle("active");

      if (mainNav.classList.contains("active")) {
        menuToggle.textContent = "✕";
      } else {
        menuToggle.textContent = "☰";
      }

    });

    // Menu link click hone par menu close
    const links = mainNav.querySelectorAll("a");

    links.forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("active");
        menuToggle.textContent = "☰";

      });

    });
  }


  // CURRENT YEAR
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
