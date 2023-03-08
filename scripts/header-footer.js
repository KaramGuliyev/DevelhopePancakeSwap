/* Sticky header start */
let headerMenu = document.querySelector('.nav')
let lastScroll = 0
let scrollUp = 'scroll-up'
let scrollDown = 'scroll-down'
let body = document.body

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll === 0) {
    // down
    headerMenu.classList.add('top')
    body.classList.remove(scrollDown)
    body.classList.add(scrollUp)
  } else if (currentScroll > 0 && currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
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

/*Option modal start*/

var modal = document.getElementById('modal')

var btn = document.getElementById('modal-button')

var span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.style.display = 'block'
  body.style.overflow = 'hidden'
}

span.onclick = function () {
  modal.style.display = 'none'
  body.style.overflow = 'unset'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
    body.style.overflow = 'unset'
  }
}
var drawer = document.querySelector('.drawer')
var mid = document.querySelector('.card-mid')
var bottom = document.querySelector('.card-bottom')
var cardTop = document.querySelector('.card-top')

if (drawer) {
  drawer.addEventListener('click', () => {
    mid?.classList.toggle('drawer-open')
    bottom?.classList.toggle('drawer-open')
    cardTop?.classList.toggle('drawer-open')
    drawer?.classList.toggle('drawer-open')
  })
} else {
  console.log('no drawer')
}

/*Option modal end*/
/*wallet modal start*/
var modal2 = document.getElementById('wallet-modal')

var btn2 = document.querySelectorAll('.wallet-modal-button')

var span2 = document.getElementsByClassName('close2')[0]

btn2.forEach((y) => {
  y.addEventListener('click', () => {
    console.log('sdadas11')
    modal2.style.display = 'block'
    body.style.overflow = 'hidden'
  })
})

span2.onclick = function () {
  modal2.style.display = 'none'
  body.style.overflow = 'unset'
}

/*wallet modal end*/

/*calc modal start*/
var modal3 = document.getElementById('calc-modal')

var btn3 = document.querySelectorAll('.calc-modal-button')

var span3 = document.getElementsByClassName('close3')[0]
var ratioCalc = document.querySelector('.ratio-calc')
btn3.forEach((x) => {
  x.addEventListener('click', () => {
    ratioCalc.style.opacity = '1'
    modal3.style.display = 'block'
    body.style.overflow = 'hidden'
  })
})

span3.onclick = function () {
  modal3.style.display = 'none'
  body.style.overflow = 'unset'
}

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = 'none'
    body.style.overflow = 'unset'
  }
  if (event.target == modal2) {
    modal2.style.display = 'none'
    body.style.overflow = 'unset'
  }
}

/*calc modal end*/
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

document.querySelector('.overlay')?.addEventListener('click', (el) => {
  el.target.classList.remove('active')
  btns.forEach(function (el) {
    el.classList.remove('active')
  })
})

/* Mobile Nav menu  end*/
