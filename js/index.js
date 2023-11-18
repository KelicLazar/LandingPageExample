document.addEventListener("scroll", onScroll);

function onScroll(e) {
  const elToAnimateOnEnter = document.querySelectorAll(".toAnimate");
  const elFromLeftOnEnter = document.querySelectorAll(".fromLeft");

  elToAnimateOnEnter.forEach((element, index) => {
    if (isElementInView(element)) {
      element.classList.add("entered");
      element.classList.remove("toAnimate");
    }
  });

  elFromLeftOnEnter.forEach((element, index) => {
    if (isElementInView(element)) {
      element.classList.add("arrowIn");
      element.classList.remove("fromLeft");
    }
  });
}

function isElementInView(element) {
  const rect = element.getBoundingClientRect();

  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

window.addEventListener("scroll", onScroll);
