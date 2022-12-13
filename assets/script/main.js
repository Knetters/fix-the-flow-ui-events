// addEventListener( CLICK ) function

let clickInteraction = document.querySelector('a:nth-of-type(1)')

clickInteraction.addEventListener('click', errorHandler)
clickInteraction.addEventListener('animationend', errorHandler)

function errorHandler() {
  clickInteraction.classList.toggle('error')
}

// addEventListener( MOUSEOVER ) function

let hoverInteraction = document.querySelector('a:nth-of-type(2)')

hoverInteraction.addEventListener('mouseover', spinHandler)
hoverInteraction.addEventListener('animationend', spinHandler)

function spinHandler() {
  hoverInteraction.classList.toggle('spin')
}

// addEventListener( DOUBLECLICK ) function

let doubleInteraction = document.querySelector('a:nth-of-type(3)')

doubleInteraction.addEventListener('dblclick', doubleHandler)
doubleInteraction.addEventListener('animationend', doubleHandler)

function doubleHandler() {
  doubleInteraction.classList.toggle('bounce')
}

// addEventListener( WHEEL ) function

let wheelInteraction = document.querySelector('a:nth-of-type(4)')

wheelInteraction.addEventListener('wheel', wheelHandler)
wheelInteraction.addEventListener('animationend', wheelHandler)

function wheelHandler() {
  wheelInteraction.classList.toggle('discoDance')
}

// addEventListener( MOUSEOUT ) function

let mouseoutInteraction = document.querySelector('a:nth-of-type(5)')

mouseoutInteraction.addEventListener('mouseout', exitHandler)
mouseoutInteraction.addEventListener('animationend', exitHandler)

function exitHandler() {
  mouseoutInteraction.classList.toggle('nietWegGaan')
}

// addEventListener( KEYDOWN ) function

let keyDownInteraction = document.querySelector('input')

keyDownInteraction.addEventListener('keydown', wiggleHandler)
keyDownInteraction.addEventListener('animationend', wiggleHandler)

function wiggleHandler() {
  keyDownInteraction.classList.toggle('wiggle')
}

// addEventListener( TOUCHSTART ) function

let touchStartInteraction = document.querySelector('a:nth-of-type(6)')

touchStartInteraction.addEventListener('touchstart', touchStartHandler)
touchStartInteraction.addEventListener('animationend', touchStartHandler)

function touchStartHandler() {
  documentBody.classList.toggle('jumper')
}