// Navigation effect on scroll

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeigth = current.offsetHeight;
    let sectionTop = current.offsetTop - 40;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth) {
      document
        .querySelector(".navigation-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navigation-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

const menuButton = document.querySelector("navigation-menu-button");
const closeButton = document.querySelector("navigation-close-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeButton.addEventListener("click", () => {
  navigation.classList.remove("active");
});
