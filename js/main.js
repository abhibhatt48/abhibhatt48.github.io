// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 25 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500
  });
  const OpenModelButton = document.querySelectorAll('[data-model-target]')
  const closeModelButton = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

  OpenModelButton.forEach(button => {
    button.addEventListener('click',() =>{
      const modal = document.querySelector(button.dataset.modalTarget)
      
      openModel(modal)
    })
  })
  closeModelButton.forEach(button => {
    button.addEventListener('click',() =>{
      const modal = button.closest('.modal')
      closeModel(modal)
    })
  })

  function openModel (model){
    if (model == null) return
    model.classList.add('active')
    overlay.classList.add('active')
  }
  function closeModel (model){
    if (model == null) return
    model.classList.remove('active')
    overlay.classList.remove('active')
  }
