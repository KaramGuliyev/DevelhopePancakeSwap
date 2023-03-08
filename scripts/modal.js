const modalTriggers = document.querySelectorAll('.modal-trigger')
const modal = document.getElementById('myModal')
const closeButton = modal.querySelector('.close')

modalTriggers.forEach(function (modalTrigger) {
  modalTrigger.addEventListener('click', function () {
    modal.style.display = 'block'
  })
})

closeButton.addEventListener('click', function () {
  modal.style.display = 'none'
})

// Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})
