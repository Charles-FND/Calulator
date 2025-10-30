let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
console.log(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText == '=') {
            string = eval(string);
            input.value = string;
        } else if (btnText == 'AC') {
            string = "";
            input.value = string;
        } else if (btnText == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});