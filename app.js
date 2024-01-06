'use strict'

function insert (num) {
    document.form.textview.value += num;
}
function clean () {
    document.form.textview.value = '';
}

function backspace () {
   let temp = document.form.textview.value;
   document.form.textview.value = temp.slice(0, -1)
}

function equal () {
    let temp = document.form.textview.value;
    document.form.textview.value = temp.slice(0, -1)
    if (temp) {
        document.form.textview.value = eval(temp)
    }
 }
 






// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     var displayValue = document.getElementById("display").value;
//     var result;

//     try {
//         result = eval(displayValue);
//         if (isNaN(result) || !isFinite(result)) {
//             throw "Ошибка вычисления";
//         }
//         document.getElementById("display").value = result;
//     } catch (error) {
//         document.getElementById("display").value = "Ошибка: " + error;
//     }
// }