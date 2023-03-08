const accordionBtns = document.querySelectorAll('.accordion-btn')
const accordionContents = document.querySelectorAll('.accordion-content')

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const content = accordionContents[i]
    if (content.style.display === 'grid') {
      content.style.display = 'none'
    } else {
      content.style.display = 'grid'
    }
  })
}
