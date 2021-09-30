const background = document.querySelector('.background')
const dinossauro = document.querySelector('.dinossauro');
let IsJumping = false
let position = 0;


function handlekeyup(event) {
    if (event.keyCode === 32) {
        if (!IsJumping) {

            jump();
        }

    }
}

function jump() {
    IsJumping = true
    let upinterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upinterval)
            //descendo

            let downinterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downinterval)
                    IsJumping = false
                } else {
                    position -= 20
                    dinossauro.style.bottom = position + 'px'
                }
            }, 20)

        } else {
            //subindo
            position += 20

            dinossauro.style.bottom = position + 'px'
        }


    }, 20)
}

function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000
    let randomTime = Math.random() * 6000



    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'

    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game over
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'

        } else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)
    setTimeout(createCactus, randomTime)
}

createCactus();

document.addEventListener('keyup', handlekeyup)