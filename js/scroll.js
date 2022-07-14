const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", scrollEvent);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollEvent() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("scroll-visible");
  } else {
    scrollToTopBtn.classList.remove("scroll-visible");
  }
}
