const $refs = {
  websiteContent: document.querySelectorAll("#website"),
  designContent: document.querySelectorAll("#design"),
  applicationContent: document.querySelectorAll("#application"),
  marketingContent: document.querySelectorAll("#marketing"),

  allBtn: document.querySelector("#all-btn"),
  websiteBtn: document.querySelector("#website-btn"),
  designBtn: document.querySelector("#design-btn"),
  applicationBtn: document.querySelector("#application-btn"),
  marketingBtn: document.querySelector("#marketing-btn"),
};

$refs.allBtn.addEventListener("click", filterCategory);
$refs.websiteBtn.addEventListener("click", filterCategory);
$refs.designBtn.addEventListener("click", filterCategory);
$refs.applicationBtn.addEventListener("click", filterCategory);
$refs.marketingBtn.addEventListener("click", filterCategory);

function filterCategory(e) {
  applyCategoryFilter(e, $refs.websiteBtn, $refs.websiteContent);
  applyCategoryFilter(e, $refs.designBtn, $refs.designContent);
  applyCategoryFilter(e, $refs.applicationBtn, $refs.applicationContent);
  applyCategoryFilter(e, $refs.marketingBtn, $refs.marketingContent);
}

function applyCategoryFilter(e, btn, content) {
  for (const element of content) {
    element.style.display =
      e.target === btn || e.target === $refs.allBtn ? "block" : "none";
  }
}
