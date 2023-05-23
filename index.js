let buttons = document.getElementsByTagName('button');
let input = document.querySelector('.inputbox')
let capcbtn = document.querySelector('.capsbtn')
let backbtn = document.querySelector('.backspacebtn')
let tabbtn = document.querySelector('.tabbtn')
let enterbtn = document.querySelector('.enterbtn')
let shiftbtn = document.querySelector('.shiftbtnl')
let shiftbtnr = document.querySelector('.shiftbtnr')
let spacebtn = document.querySelector('#spacebtn')
let clearbtn = document.querySelector('.clearbtn')

let dote = document.querySelector('.dote')
let div1 = document.querySelector('.div1');
let specialchar = document.querySelector('.specialchar')
let shift = document.querySelectorAll('#shiftbtn')
console.log(shift);



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        if (buttons[i].innerHTML !== "Enter" && buttons[i].innerHTML !== "Space Bar" && buttons[i].innerHTML !== 'Shift' && buttons[i].innerHTML !== 'Backspace' &&
            buttons[i].innerHTML !== 'clear' && buttons[i].innerHTML !== 'Tab' && buttons[i].innerHTML !== 'CapsLock') {
            input.value += e.target.innerText
        }

        if (e.target.innerText == 'Backspace') {
            input.value = input.value.slice(0, input.value.length - 1)
        }

        if (e.target.innerText == 'Space Bar') {
            input.value += ' '
        }
        if (e.target == enterbtn) {
            input.value += '\n'
        }
        if (e.target == tabbtn) {
            input.value += '    '
        }
        if (e.target == clearbtn) {
            input.value = ""
        }
        if (e.target == enterbtn) {
            input.value += "\n"
        }

    })

    capcbtn.addEventListener("click", () => {

        if (buttons[i].innerText !== "Enter" && buttons[i].innerText !== "Space Bar" && buttons[i].innerText !== "Backspace"
            && buttons[i].innerText !== 'Shift' && buttons[i].innerText !== 'clear' && buttons[i].innerText !== 'Tab') {

            dote.classList.toggle('show')

            buttons[i].classList.toggle('upper')
        }
    })


}


for (let m = 0; m < shift.length; m++) {
    shift[m].addEventListener('click', (e) => {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].innerText !== "Enter" && buttons[i].innerText !== "Space Bar" && buttons[i].innerText !== 'Shift' && buttons[i].innerText !== 'Backspace' &&
                buttons[i].innerText !== 'clear' && buttons[i].innerText !== 'Tab' && buttons[i].innerText != 'CapsLock' && buttons[i].innerText != '/') {

                buttons[i].classList.toggle('upper')

                specialchar.classList.toggle('show')

                div1.classList.toggle('none');
            }
        }
    })

}





