const emailInput = document.getElementById("email-input");
let inputWrapper = document.getElementById("input-wrapper");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function addInvalid() {
    if (!emailInput.value.match(emailRegex) && emailInput.length != 0) {
        inputWrapper.setAttribute('data-after', 'Please provide a valid email address');
        inputWrapper.classList.add("invalid");
    }

    if (emailInput.value === "") {
        inputWrapper.setAttribute('data-after', 'Whoops! It looks like you forgot to add your email');
        inputWrapper.classList.add("invalid");
    }
} 