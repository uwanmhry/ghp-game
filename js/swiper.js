const swiper = new Swiper(".swiper", {
  initialSlide: 3,
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  speed: 900,
  grabCursor: true,
  allowTouchMove: false,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadow: true,
  },
  mousewheel: {
    thresholdDelta: 50,
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});

const slides = document.querySelectorAll(".swiper-slide");

function flipCard() {
  const activeSlide = document.querySelector(".swiper-slide-active");
  const btnFlip = activeSlide.querySelector(".btn-flip");

  if (btnFlip) {
    btnFlip.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!activeSlide.classList.contains("flipped")) {
        activeSlide.classList.add("flipped");
      }
    });
  }

  activeSlide.addEventListener("click", () => {
    if (activeSlide.classList.contains("flipped")) {
      activeSlide.classList.remove("flipped");
    }
  });
}

swiper.on("slideChangeTransitionStart", () => {
  slides.forEach((slide) => {
    slide.classList.remove("flipped");
  });
  flipCard();
});
flipCard();

// const slide = document.querySelectorAll(".swiper-slide");

// function flipCard() {
//   const activeSlide = document.querySelector(".swiper-slide-active");
//   const btnFlip = activeSlide.querySelector(".btn-flip");

//   if (btnFlip) {
//     btnFlip.addEventListener("click", (event) => {
//       event.stopPropagation();
//       activeSlide.classList.add("flipped");
//     });
//   }
// }

// slide.forEach((slide) => {
//   slide.addEventListener("click", () => {
//     if (
//       slide.classList.contains("swiper-slide-active") &&
//       !slide.classList.contains("flipped")
//     ) {
//       slide.classList.remove("flipped");
//       alert("Card clicked!");
//       console.log("Card clicked!");
//     }
//   });
//   s;
// });

// swiper.on("slideChangeTransitionStart", () => {
//   slide.forEach((slide) => {
//     slide.classList.remove("flipped");
//   });
//   flipCard();
// });
// flipCard();
