document.addEventListener("DOMContentLoaded", () => {
    handleInitMessageLoad()
})

// todo TYPING ANIMATIONS 
function handleInitMessageLoad() {
    handleTypingAnimation(initMessage)
    setTimeout(() => {
        handleEndOfTypingAnimationWithMessage(initMessage, 'animate__pulse', 'animate__fadeInRight', 'animate__infinite', "Hey, welcome to my portfolio!")
    }, 3000)
}

function handleTypingAnimation(element) {
    element.textContent = 'typing...'
    element.style.fontStyle = "italic"
    element.classList.add('animate__pulse', 'animate__infinite')
}

function handleEndOfTypingAnimationWithMessage(element, effectToRemove, effectToAdd = null, removeOther = null, message) {
    element.classList.remove(effectToRemove, removeOther)
    element.classList.add(effectToAdd)
    element.textContent = message
    element.style.fontStyle = "normal"
}