let anwser = document.querySelector('.anwser')
let input = document.querySelector('.input')
let number = document.querySelectorAll('.number')
let Clear = document.querySelector('.Clear')
let Taghsim = document.querySelector('.Taghsim')
let Zarb = document.querySelector('.Zarb')
let Plus = document.querySelector('.Plus')
let minus = document.querySelector('.minus')
let point = document.querySelector('.point')
let mosavi = document.querySelector('.mosavi')
let num0 = document.querySelector('.num0')
let num00 = document.querySelector('.num00')
let num9 = document.querySelector('.num9')
let num8 = document.querySelector('.num8')
let num7 = document.querySelector('.num7')
let num6 = document.querySelector('.num6')
let num5 = document.querySelector('.num5')
let num4 = document.querySelector('.num4')
let num3 = document.querySelector('.num3')
let num2 = document.querySelector('.num2')
let num1 = document.querySelector('.num1')

function math() {
   if (event.keyCode === 13) {
      input.value = Math.floor(eval(input.value)).toFixed(2)
   }
}

Clear.addEventListener('click', function () {
   input.value = ''
})
Taghsim.addEventListener('click', function () {
   input.value += '/'
})
Zarb.addEventListener('click', function () {
   input.value += '*'
})
Plus.addEventListener('click', function () {
   input.value += '+'
})
minus.addEventListener('click', function () {
   input.value += '-'
})
point.addEventListener('click', function () {
   input.value += '.'
})
mosavi.addEventListener('click', function () {
   input.value = Math.floor(eval(input.value)).toFixed(2)
})
num0.addEventListener('click', function () {
   input.value += '0'
})
num00.addEventListener('click', function () {
   input.value += '00'
})
num9.addEventListener('click', function () {
   input.value += '9'
})
num8.addEventListener('click', function () {
   input.value += '8'
})
num7.addEventListener('click', function () {
   input.value += '7'
})
num6.addEventListener('click', function () {
   input.value += '6'
})
num5.addEventListener('click', function () {
   input.value += '5'
})
num4.addEventListener('click', function () {
   input.value += '4'
})
num3.addEventListener('click', function () {
   input.value += '3'
})
num2.addEventListener('click', function () {
   input.value += '2'
})
num1.addEventListener('click', function () {
   input.value += '1'
})











input.addEventListener('keydown', math)