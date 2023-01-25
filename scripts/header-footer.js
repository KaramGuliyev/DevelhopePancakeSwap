/* Sticky header start */
let headerMenu = document.querySelector('.nav')
let lastScroll = 0

let scrollUp = 'scroll-up'
let scrollDown = 'scroll-down'
let body = document.body

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp)
    body.classList.add(scrollDown)
    headerMenu.classList.remove('top')
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    headerMenu.classList.add('top')
    body.classList.remove(scrollDown)
    body.classList.add(scrollUp)
  }
  lastScroll = currentScroll
})
/* Sticky header end */

/* Mobile Nav menu  start*/

let btns = document.querySelectorAll('.mobile-nav-btn')

btns.forEach(function (item) {
  item.addEventListener('click', function () {
    btns.forEach(function (el) {
      el.classList.remove('active')
      document.querySelector('.overlay').classList.remove('active')
    })
    item.classList.add('active')
    document.querySelector('.overlay').classList.add('active')
  })
})

document.querySelector('.overlay').addEventListener('click', (el) => {
  el.target.classList.remove('active')
  btns.forEach(function (el) {
    el.classList.remove('active')
  })
})

/* Mobile Nav menu  end*/
