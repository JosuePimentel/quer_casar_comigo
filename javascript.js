function prank(resp, ele) {
    const sect = document.querySelector('section')
    const Hsect_Max = (sect.clientHeight - ele.clientHeight)
    const Wsect_Max = (sect.clientWidth - ele.clientWidth)
    // console.log(Hsect_Max, Wsect_Max)
    const Ran_Position_X = random(0, Wsect_Max)
    const Ran_Position_Y = random(0, Hsect_Max)
    // console.log(Ran_Position_X, Ran_Position_Y)
    const title = document.querySelector('h1')
    const janela = document.querySelector('.window')
    if(!resp) {
        ele.style.right = `${Ran_Position_X}px`
        ele.style.top = `${Ran_Position_Y}px`
    }else {
        janela.classList.toggle('active')
        ele.style.left = `calc(50% - 50px)`
        ele.nextElementSibling.style.display = 'none'
        title.innerHTML = "Me da o cu?🥺 :P"
    }
}

const random = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + min))
}