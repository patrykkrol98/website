const submitButton = document.getElementById("submitButton");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");

function nameValidation(name) {
    if (name.value.split(/\W+/).length === 2) {
        return true;
    }
    alert('Invalid Name and Surname');
    return false;
}

function emailValidations(email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email.value) === false) {
        alert('Invalid Email Address');
        return false;
    }
    return true;
}

function messageValidation(message) {
    if (message.value.length < 6) {
        alert('The message is too short!');
        return false;
    }
    return true;
}

function validation() {
    if (nameValidation(name) && emailValidations(email) && messageValidation(subject)){
        alert('Message send successfully!')
    }
}

submitButton.addEventListener('click', validation);