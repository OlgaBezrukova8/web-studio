const $refs = {
  menuBtnRef: document.querySelector("[data-menu-button]"),
  menuMenuRef: document.querySelector("[data-mobile-menu]"),
};

$refs.menuBtnRef.addEventListener("click", actionOnBtnModal);

function actionOnBtnModal() {
  const expanded =
    $refs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  $refs.menuBtnRef.classList.toggle("is-open");
  $refs.menuBtnRef.setAttribute("aria-expanded", !expanded);
  $refs.menuMenuRef.classList.toggle("is-open");
}
