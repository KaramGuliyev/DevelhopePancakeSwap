let scrollToTop = document.querySelector("#scrollToTop");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll < window.innerHeight) {
    scrollToTop.classList.remove("visible");
    scrollToTop.classList.add("hidden");
  } else {
    scrollToTop.classList.add("visible");
    scrollToTop.classList.remove("hidden");
  }
});
