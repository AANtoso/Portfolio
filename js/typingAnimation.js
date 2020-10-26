function handleTypingAnimation() {
    const typing = document.createElement('div')
    typing.textContent = "typing..."
    typing.style.fontStyle = "italic"
    typing.classList.add("animate__animated", "animate__pulse", "animate__infinite")
    messageCont.appendChild(typing)
    setTimeout(() => {
        typing.classList.add('hide-this')
    }, 500);
}

function handleMessageCreation(message) {
    handleTypingAnimation()
    const speakerAndMessage = document.createElement('div')
    speakerAndMessage.classList.add('speaker-and-message', 'animate__animated', 'animate__lightSpeedInRight')
    speakerAndMessage.style.marginBottom = "10px"
    const messageContent = document.createElement('div')
    messageContent.classList.add('message-content', 'animate__animated')
    messageContent.textContent = message
    speakerAndMessage.append(messageContent)
    setTimeout(() => {
        messageCont.appendChild(speakerAndMessage)
    }, 1000);
}

function newMessageTimer(message, time) {
    setTimeout(() => {
        handleMessageCreation(message)
    }, time);
}