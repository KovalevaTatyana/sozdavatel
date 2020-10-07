'use strict';

function validate(event) {
    let button = event.target;
    let form = button.parentElement;
    valid = true;
    if (form["message"].value === '') {
        message.classList.add('error');
        valid = false;
    }
    let regemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address  = form["email"].value;
    if (regemail.test(address) === false) {
        email.classList.add('error');
        valid =  false;
    }
    let regtel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let telephone  = form["phone"].value;
    if (regtel.test(telephone) === false) {
        phone.classList.add('error');
        valid =  false;
    }
    if (!valid){
        event.preventDefault();
    }
}
document.getElementById('submit').addEventListener(
    'click', validate, false
);