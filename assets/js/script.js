const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
})