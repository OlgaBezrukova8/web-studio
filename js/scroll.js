const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollEvent() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("scroll-visible");
  } else {
    scrollToTopBtn.classList.remove("scroll-visible");
  }
}

window.addEventListener("scroll", scrollEvent);
