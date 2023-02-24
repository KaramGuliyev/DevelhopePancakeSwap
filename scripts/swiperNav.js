let carouselBtn = document.getElementsByClassName('carouselNavButton')
let sliders = document.getElementsByClassName('slider')

for (let i = 0; i < carouselBtn.length; i++) {
  const element = carouselBtn[i]
  element.addEventListener('click', (e) => {
    clearInterval(carouselInvetval)
    handleInterval(e.target.id)
    handleChange(e.target.id, sliders)
  })
}

const handleChange = (e) => {
  if (carouselBtn[e - 1].classList.contains('active')) {
  } else if (e === '1' && !carouselBtn[e - 1].classList.contains('active')) {
    setNewActiveButton(e)
    console.log(e)
  } else if (!sliders[e - 1].classList.contains('active')) {
    setNewActiveButton(e)
  }
}

function handleInterval(id) {
  let i = id
  carouselInvetval = setInterval(() => {
    i++
    if (i === 4) {
      console.log(`Break at : ${i}`)
      i = 1
    }
    setNewActiveButton(i)
  }, 5000)
}

let startID = Array.from(carouselBtn).filter((element) => element.classList.contains('active'))[0].id
handleInterval(startID)

const setNewActiveButton = (e) => {
  for (let i = 0; i < carouselBtn.length; i++) {
    const element = carouselBtn[i]
    element.classList.remove('active')
  }
  for (let i = 0; i < sliders.length; i++) {
    const element = sliders[i]
    element.removeAttribute('style')
  }
  setTimeout(() => {
    sliders[e - 1].setAttribute('style', 'opacity:1;')
    carouselBtn[e - 1].classList.add('active')
  }, 10)
}
