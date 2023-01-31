let scrollToTop = document.querySelector("#scrollToTop");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > window.innerHeight) {
    scrollToTop.setAttribute("class", "scrollToTop visible");
    scrollToTop.setAttribute("style", "")

  } else if (scrollToTop.classList.contains("visible")) {
    scrollToTop.setAttribute("class", "scrollToTop hidden");
    setTimeout(() => {
      scrollToTop.setAttribute("style", "display:none;");
    }, 500);
  }
});

let scrollToTopButton = document.querySelector(".scrollButton");
scrollToTopButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

