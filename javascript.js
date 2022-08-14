function prank(resp, ele) {
    const Hsect_Max = 500
    const Wsect_Max = 600
    const Ran_Position_X = random(0, Wsect_Max)
    const Ran_Position_Y = random(0, Hsect_Max)
    const title = document.querySelector('h1')
    const janela = document.querySelector('.window')
    if(!resp) {
        ele.style.right = `${Ran_Position_X}px`
        ele.style.top = `${Ran_Position_Y}px`
    }else {
        janela.classList.toggle('active')
        ele.style.left = 'calc(50% - 50px)'
        ele.nextElementSibling.style.display = 'none'
        title.innerHTML = "Me da o cu?🥺 :P"
    }
}

const random = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + min))
}
