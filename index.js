const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation-list");
const mobileNav = document.querySelector(".mobile-nav");

const toggleClose = document.querySelector("#toggle-close");
const toggleOpen = document.querySelector("#toggle-open");
let toggleActivated = false;

toggle.addEventListener("click", () => {
  toggleActivated = !toggleActivated;
  body.classList.toggle("no-scroll");
  mobileNav.classList.toggle("active");
  navigation.classList.toggle("show-navigation-list");

  if (toggleActivated) {
    toggleClose.style.display = "block";
    toggleOpen.style.display = "none";
    setTimeout(() => {
      navigation.style.display = "block";
    }, 200);
  } else {
    toggleClose.style.display = "none";
    toggleOpen.style.display = "block";
    navigation.style.display = "none";
  }
});
