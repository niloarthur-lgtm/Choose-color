const sliderContainer = document.querySelector(`.slider-container`)
const colorContainer = document.querySelector('.colorContainer')
const textInput = document.querySelector('#textInput')
const buttonBody = document.querySelector('#buttonBody')

let sliders = []
for (let i = 0; i < 3; i++) {
    let inputRange = document.createElement('input')
    inputRange.type = 'range'
    inputRange.min = '0'
    inputRange.max = '255'
    inputRange.value = '30'
    inputRange.step = '1'
    inputRange.id = i
    
    sliders.push(inputRange)
    
    sliderContainer.appendChild(inputRange)
}

const slider = document.querySelector('input[type="range"]');


function atualizar(index) {
    // Calcula o percentual de forma simples
    let s = sliders[index]
        const pct = (s.value - s.min) / (s.max - s.min) * 100;
        // Atualiza apenas a variável CSS
    s.style.setProperty('--progresso',`${pct}%`)
    // para comando para desenhar seguindo o input
    mudarCor()
}
let bodyColor = false
function mudarCor(){
    if(bodyColor == true){
            document.body.style.backgroundColor = `rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`
            colorContainer.style.backgroundColor = `transparent`
            colorContainer.style.transform = 'scale(190%)'
            buttonBody.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"/></svg>`
        }
        else{
            document.body.style.backgroundColor = 'white'
        colorContainer.style.backgroundColor = `rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`
        colorContainer.style.transform = 'scale(100%)'
        buttonBody.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/></svg>`
        }
        // cor de fundo
        
       textInput.value =`rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`
       // coloca o texto
       
       if(sliders[1].value < 100){
           textInput.style.color = 'white'
           document.documentElement.style.setProperty('--colorFill', 'white')
       }
       else{
           textInput.style.color = 'black'
           document.documentElement.style.setProperty('--colorFill', 'black')
       }
       // muda cor do text
}
function bodyColorChange(){
    
    if(bodyColor == true){
        bodyColor = false
        
    }
    else{
        bodyColor = true
        
    }
    
    mudarCor()
}

sliders[0].addEventListener('input', () => { atualizar(0) })
sliders[1].addEventListener('input', () => { atualizar(1) })
sliders[2].addEventListener('input', () => { atualizar(2) })

atualizar(0)
atualizar(1)
atualizar(2)
