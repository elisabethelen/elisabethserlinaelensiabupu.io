window.addEventListener("scroll", (event) => {
  const nav = document.querySelector("nav");

  let scroll = this.scrollY;
  if (scroll > 90) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});
