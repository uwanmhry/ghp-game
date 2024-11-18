let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah
    navbar.classList.add("hidden");
  } else {
    // Scroll ke atas
    navbar.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle visibility of navbar when scrolling
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });

  // Intersection Observer to track section visibility
  const observerOptions = {
    root: null, // observing relative to viewport
    rootMargin: "0px",
    threshold: 0.5, // Consider section "visible" when 50% of it is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`a[href='#${entry.target.id}']`);

      if (entry.isIntersecting) {
        link.classList.add("active"); // Add active class when section is in view
      } else {
        link.classList.remove("active"); // Remove active class when section is out of view
      }
    });
  }, observerOptions);

  // Observe each section
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
