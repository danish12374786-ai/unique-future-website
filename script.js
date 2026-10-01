// =========================================
// UNIQUE FUTURE HR CONSULTANCY
// WEBSITE JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------------------
  // MOBILE MENU
  // -----------------------------------------

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");

      if (mainNav.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
      } else {
        menuToggle.innerHTML = "☰";
      }
    });

    // Close mobile menu after clicking a link
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.innerHTML = "☰";
      });
    });
  }


  // -----------------------------------------
  // JOB SEARCH
  // -----------------------------------------

  const jobSearch = document.getElementById("jobSearch");
  const jobsContainer = document.getElementById("jobsContainer");

  if (jobSearch && jobsContainer) {

    const searchJobs = () => {

      const searchText =
        jobSearch.value.toLowerCase().trim();

      const jobCards =
        jobsContainer.querySelectorAll(".job-card");

      jobCards.forEach((card) => {

        const cardText =
          card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }

      });
    };

    jobSearch.addEventListener("input", searchJobs);
  }


  // -----------------------------------------
  // CURRENT YEAR
  // -----------------------------------------

  const yearElements =
    document.querySelectorAll("[data-current-year]");

  yearElements.forEach((element) => {
    element.textContent =
      new Date().getFullYear();
  });


  // -----------------------------------------
  // SMOOTH SCROLL
  // -----------------------------------------

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        const header =
          document.querySelector(".site-header");

        const headerHeight =
          header ? header.offsetHeight : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }

    });

  });


  // -----------------------------------------
  // SIMPLE SCROLL REVEAL
  // -----------------------------------------

  const revealElements =
    document.querySelectorAll(
      ".info-card, .service-card, .sector-item, .process-step, .job-card, .office-card"
    );

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";

              observer.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.08
        }
      );

    revealElements.forEach((element) => {

      element.style.opacity = "0";
      element.style.transform = "translateY(18px)";
      element.style.transition =
        "opacity .6s ease, transform .6s ease";

      observer.observe(element);

    });

  }

});
