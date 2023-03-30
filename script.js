let isMenuOn = false;

const hamburger = document.querySelector("#hamburger-svg");
function hamburgerClick() {
  const menu = document.querySelector("#navbar-mobile");
  if (isMenuOn) {
    menu.style.display = "none";
    isMenuOn = false;
  } else {
    menu.style.display = "flex";
    isMenuOn = true;
  }
}

hamburger.addEventListener("click", hamburgerClick);
