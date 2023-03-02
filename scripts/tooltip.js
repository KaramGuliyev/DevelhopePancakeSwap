const tooltips = document.querySelectorAll('.tooltip')

tooltips.forEach(function (tooltip) {
  tooltip.addEventListener('mouseenter', function () {
    const tooltipText = this.querySelector('.tooltiptext')
    tooltipText.style.visibility = 'visible'
    tooltipText.style.opacity = 1
  })

  tooltip.addEventListener('mouseleave', function () {
    const tooltipText = this.querySelector('.tooltiptext')
    tooltipText.style.visibility = 'hidden'
    tooltipText.style.opacity = 0
  })
})
