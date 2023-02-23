let carouselBtn = document.getElementsByClassName('carouselNavButton')
let carouselWrapper = document.getElementsByClassName('carouselWrapper')

console.log(carouselWrapper)

for (let i = 0; i < carouselBtn.length; i++) {
  const element = carouselBtn[i]
  carouselBtn[i].addEventListener('click', (e) => {
    handleChangeCarousel(e.target)
  })
}

const handleChangeCarousel = (e) => {
  console.log(e.id)
  console.log(carouselWrapper)
  console.log(carouselWrapper[e.id])
}
