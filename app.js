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
