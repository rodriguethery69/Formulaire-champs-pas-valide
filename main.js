const form = document.getElementById('contact-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const telInput = document.querySelector('#tel');
const addressInput = document.querySelector('#address');
const subjectInput = document.querySelector('#subject');
const msgInput = document.querySelector('#msg');
const feedbackDiv = document.createElement('div');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (lnameInput.value == "") {
        feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
        lnameInput.after(feedbackDiv);
    } else {
        feedbackDiv.innerHTML = "Le contenu est valide";
        lnameInput.after(feedbackDiv);
    }

    if (fnameInput.value == "") {
        feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
        fnameInput.after(feedbackDiv);
    } else {
        feedbackDiv.innerHTML = "Le contenu est valide";
        fnameInput.after(feedbackDiv);
    }

    if (telInput.value == "") {
        feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
        telInput.after(feedbackDiv);
    } else {
        feedbackDiv.innerHTML = "Le contenu est valide";
        telInput.after(feedbackDiv);
    }
    if (addressInput.value == "") {
        feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
        addressInput.after(feedbackDiv);
    } else {
        feedbackDiv.innerHTML = "Le contenu est valide";
        addressInput.after(feedbackDiv);
    }

    if (subjectInput.value == "") {
        feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
        subjectInput.after(feedbackDiv);
    } else {
        feedbackDiv.innerHTML = "Le contenu est valide";
        subjectInput.after(feedbackDiv);
    }

    if (msgInput.value == "") {
        feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
        msgInput.after(feedbackDiv);
    } else {
        feedbackDiv.innerHTML = "Le contenu est valide";
        msgInput.after(feedbackDiv);
    }
})