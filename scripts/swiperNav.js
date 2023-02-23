let carouselBtn = document.getElementsByClassName('carouselNavButton')
let sliders = document.getElementsByClassName('slider')

for (let i = 0; i < carouselBtn.length; i++) {
  const element = carouselBtn[i]
  element.addEventListener('click', (e) => {
    handleChange(e.target.id, sliders)
  })
}

const handleChange = (e) => {
  console.log(e)
  if (carouselBtn[e - 1].classList.contains('active')) {
  } else if (e === '1' && !carouselBtn[e - 1].classList.contains('active')) {
    setNewActiveButton(e)
  } else if (!sliders[e - 1].classList.contains('active')) {
    setNewActiveButton(e)
  }
}

const setNewActiveButton = (e) => {
  for (let i = 0; i < carouselBtn.length; i++) {
    const element = carouselBtn[i]
    element.classList.remove('active')
  }
  setTimeout(() => {
    carouselBtn[e - 1].classList.add('active')
  }, 10)
}
