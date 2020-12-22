// smooth scroll to required sections functionality

let aboutSection = document.querySelector(".about-link");
let skillsSection = document.querySelector(".skills-link");
let contactSection = document.querySelector("contact-link");

function smoothScroll(to, duration) {
  let target = document.querySelector(to);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let starTime = null;

  let animation = function (currentTime) {
    if (starTime === null) startPosition = currentTime;
    let timeElapsed = currentTime - starTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  function ease(t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// smooth scroll activators - from respective nav links
// to 'my skills' section
skillsSection.addEventListener("click", function () {
  smoothScroll("#skills", 2000);
});
// to 'contact me' section
contactSection.addEventListener("click", function () {
  smoothScroll("#contact", 2000);
});
