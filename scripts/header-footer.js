/* Sticky header start */
let headerMenu = document.querySelector(".nav");
let lastScroll = 0;

let scrollUp = "scroll-up";
let scrollDown = "scroll-down";
let body = document.body;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll === 0) {
    // down
    headerMenu.classList.add("top");
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  } else if (currentScroll > 0 && currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    headerMenu.classList.remove("top");
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    headerMenu.classList.add("top");
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
/* Sticky header end */

/* Mobile Nav menu  start*/

let btns = document.querySelectorAll(".mobile-nav-btn");

btns.forEach(function (item) {
  item.addEventListener("click", function () {
    btns.forEach(function (el) {
      el.classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
    });
    item.classList.add("active");
    document.querySelector(".overlay").classList.add("active");
  });
});

document.querySelector(".overlay").addEventListener("click", (el) => {
  el.target.classList.remove("active");
  btns.forEach(function (el) {
    el.classList.remove("active");
  });
});

/* Mobile Nav menu  end*/

/*Option modal start*/
var modal = document.getElementById("modal");

var btn = document.getElementById("modal-button");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
};

span.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "unset";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "unset";
  }
};

/*Option modal end*/
