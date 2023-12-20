const navLinks = document.querySelectorAll(".link-to");

function highlightNavLink() {
  const scrollPosition = window.scrollY;
  console.log("test");

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      const sectionBottom = sectionTop + targetSection.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNavLink);

highlightNavLink();

