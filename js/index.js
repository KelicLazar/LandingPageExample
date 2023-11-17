document.addEventListener("scroll", onScroll);

function onScroll(e) {
  const elToAnimateOnEnter = document.querySelectorAll(".toAnimate");
  const elFromLeftOnEnter = document.querySelectorAll(".fromLeft");
  // console.log(elToAnimateOnEnter);
  elToAnimateOnEnter.forEach((element, index) => {
    if (isElementInView(element)) {
      console.log("Element " + (index + 1) + " is in the viewport!");

      element.classList.add("entered");
      element.classList.remove("toAnimate");
    } else {
      console.log("Element " + (index + 1) + " is not in the viewport.");
    }
  });

  elFromLeftOnEnter.forEach((element, index) => {
    if (isElementInView(element)) {
      console.log("Element " + (index + 1) + " is in the viewport!");

      element.classList.add("arrowIn");
      element.classList.remove("fromLeft");
    } else {
      console.log("Element " + (index + 1) + " is not in the viewport.");
    }
  });
}

// Function to check if the element is in the viewport
function isElementInView(element) {
  // console.log(element);
  const rect = element.getBoundingClientRect();
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if any part of the element is visible in the viewport
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

window.addEventListener("scroll", onScroll);

// const cursor = document.querySelector(".custom-cursor");

// const highlightedTexts = document.querySelectorAll(".highlight-text");
// const highlightedButtons = document.querySelectorAll(".highlight-button");

// document.addEventListener("mouseenter", () => {
//   cursor.style.display = "block";
// });

// document.addEventListener("mouseleave", () => {
//   cursor.style.display = "none";
// });
// let scrollY;
// document.addEventListener("scroll", (e) => {
//   scrollY;
// });

// document.addEventListener("mousemove", trackCursor);

// function trackCursor(e) {
//   cursor.style.transform = `translate(${
//     e.clientX - cursor.clientWidth / 2
//   }px , ${window.scrollY + e.clientY - cursor.clientHeight / 2}px)`;
// }

// highlightedTexts.forEach((text) => {
//   text.addEventListener("mouseenter", () => {
//     cursor.style.backgroundColor = "#ff6f1f";
//   });
//   text.addEventListener("mouseleave", () => {
//     cursor.style.backgroundColor = "#d5ff2f";
//   });
// });
// highlightedButtons.forEach((btn) => {
//   btn.addEventListener("mouseenter", () => {
//     cursor.style.backgroundColor = "#ff6f1f";
//   });
//   btn.addEventListener("mouseleave", () => {
//     cursor.style.backgroundColor = "#d5ff2f";
//   });
// });
