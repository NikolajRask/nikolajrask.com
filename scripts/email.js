const messageName = document.getElementById('message-name');
const messageEmail = document.getElementById('message-email');
const message = document.getElementById('message-message');
const messageBtn = document.getElementById('message-button');

const bundle = [messageName, messageEmail, message]

for (let i = 0; i < bundle.length; i++) {
    bundle[i].addEventListener('change', () => {
        if (checkInputs() == true) {
            toggleSubmit('show')
        } else toggleSumbit('hide')
    })
}

function checkInputs() {
    if (messageName.value.length > 1) {
        if (messageEmail.value.length > 1) {
            if (message.value.length > 50) {
                return true;
            } else return false;
        } else return false;
    } else return false;
}

function toggleSubmit(toggle) {
    if (toggle == "show") {
        messageBtn.removeAttribute('disabled');
    }
    if (toggle == "hide") {
        messageBtn.setAttribute('disabled');
    }
}