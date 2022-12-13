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
  touchStartInteraction.classList.toggle('jumper')
}

// addEventListener( TOUCHEND ) function

let touchEndInteraction = document.querySelector('a:nth-of-type(7)')

touchEndInteraction.addEventListener('touchend', touchEndHandler)
touchEndInteraction.addEventListener('animationend', touchEndHandler)

function touchEndHandler() {
  touchEndInteraction.classList.toggle('blob')
}

// addEventListener( TOUCHMOVE ) function

let touchMoveInteraction = document.querySelector('a:nth-of-type(8)')

touchMoveInteraction.addEventListener('touchmove', touchMoveHandler)
touchMoveInteraction.addEventListener('animationend', touchMoveHandler)

function touchMoveHandler() {
  touchMoveInteraction.classList.toggle('shake')
}

// addEventListener( COPY ) function

let copyInteraction = document.querySelector('.copy-input')

copyInteraction.addEventListener('copy', copyHandler)
copyInteraction.addEventListener('animationend', copyHandler)

function copyHandler() {
  copyInteraction.classList.toggle('happy')
}