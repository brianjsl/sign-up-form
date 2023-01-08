let passInput = document.querySelector('input#pass');
let passNote = document.querySelector('.passwordNote');
let confirmPassInput = document.querySelector('input.confirmPass');

function checkPassEquality() {
    console.log("Checking Password!");
    if (passInput.value == confirmPassInput.value && (passInput.value.length != 0) 
        && (confirmPassInput.length != 0) ) {
        passInput.classList.remove('error');
        confirmPassInput.classList.remove('error');
        passNote.classList.remove('error');
    } else {
        passInput.classList.add('error');
        confirmPassInput.classList.add('error');
        passNote.classList.add('error');
    }
}

passInput.addEventListener('input', (event) => {checkPassEquality()});
confirmPassInput.addEventListener('input', (event) => {checkPassEquality()})