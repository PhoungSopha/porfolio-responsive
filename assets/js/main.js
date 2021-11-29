// toggle navbar

const navMenu = document.getElementById("nav-menu");
toggleMenu = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// remove menu after clicked link

const navlink = document.querySelectorAll(".nav__link");

function navActive() {
  navMenu.classList.remove("show-menu");
}

navlink.forEach((n) => n.addEventListener("click", navActive));

// scroll selection active link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
