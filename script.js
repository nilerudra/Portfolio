// toggle Menu
function toggleDrawer() {
  var drawer = document.getElementById("drawer");
  if (drawer.style.width === "0px" || drawer.style.width === "") {
    drawer.style.width = "250px";
  } else {
    drawer.style.width = "0px";
  }
}

// scroll effect

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 500); // Delay of 0.5s between each component
      } else {
        setTimeout(() => {
          entry.target.classList.remove("visible");
        }, index * 500); // Delay of 0.5s between each component
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
