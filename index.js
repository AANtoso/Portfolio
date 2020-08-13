document.addEventListener("DOMContentLoaded", () => {
    handleIniteMessageLoad()
})

function handleIniteMessageLoad() {
    initMessage.textContent = 'typing...'
    initMessage.classList.add('animate__pulse', 'animate__infinite')
    setTimeout(() => {
        initMessage.classList.remove('animate__pulse', 'animate__infinite')
        initMessage.classList.add('animate__fadeInRight')
        initMessage.textContent = "Hey, welcome to my portfolio!"
    }, 3000)
}

//animate__fadeInRight