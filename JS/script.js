//#region Variables
let input_val = document.getElementById('input_val');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
const myBtn = document.getElementById('btn');
let number1 = num1.innerText;
let number2 = num2.innerText;
//#endregion

//#region Calculo Matematico que me tire un número random
//retorna un entero aleatorio del 0 al 9
num1.innerText = Math.floor(Math.random() * 10);
num2.innerText = Math.floor(Math.random() * 10);
//#endregion
//#region Evento
myBtn.addEventListener("click", () => {
    let sum_result = parseInt(number1) + parseInt(number2);
    let res = parseInt(input_val.value)
    if (res == sum_result) {
        alert("Usted no es un robot");
        document.getElementsByClassName('preguntas').style.display = 'none';
        document.getElementsByClassName('captcha').style.display = 'none';
    } else {
        alert("Usted es un robot");
    }
});
//#endregion