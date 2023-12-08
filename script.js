// JOIN ALSC FORM :: SET VARIABLES
const modalContainer = document.querySelector('.modal-container')
const yesWWC = document.querySelector('#yes-wwc')
const submitBtn = document.querySelector('.submitbtn')
const submitModalContainer = document.querySelector('#submit-modal-container')
const submitModalBtn = document.querySelector('#submit-modal-button')
const form = document.querySelector('.form')
const firstNameInput = document.querySelector('#firstname-input')
const lastNameInput = document.querySelector('#lastname-input')
const emailInput = document.querySelector('#email-input')
const contactNumberInput = document.querySelector('#contactnumber-input')
const inputs = document.querySelectorAll('#firstname-input, #lastname-input, #email-input, #contactnumber-input, #family, #active-family, #individual-senior, #individual-youth, #associate-social, #nippers, #wwc');

// JOIN ALSC FORM :: WHEN PAGE LOADS, SHOW POPUP 
window.addEventListener("load", function () {
	const timerId = setInterval (function () {
		if (Number(modalContainer.style.opacity) < 1) {
			modalContainer.style.opacity = Number(modalContainer.style.opacity) + 0.1;
		} else if (Number(modalContainer.style.opacity) >= 1) {
			clearInterval(timerId);
		}
	}, 50);
});

// JOIN ALSC FORM :: WHEN USER SELECTS I HAVE A WWC, CLOSE THE POPUP
yesWWC.addEventListener('click', function() {
    modalContainer.style.display = "none";
})

// WHEN USER HITS SUBMIT, A POP UP APPEARS
submitBtn.addEventListener('click', function (event) {
    event.preventDefault ();
    if (firstNameInput.value == "") {
        firstNameInput.style.border = "solid red 2px"
        firstNameInput.style.backgroundColor = "pink"
        firstNameInput.placeholder = "Please enter your first name"
        return false;
    } 

    if (lastNameInput.value == "") {
        lastNameInput.style.border = "solid red 2px"
        lastNameInput.style.backgroundColor = "pink"
        lastNameInput.placeholder = "Please enter your last name"
        return false;
    } 

    if (emailInput.value === "") {
        emailInput.style.border = "solid red 2px";
        emailInput.style.backgroundColor = "pink";
        emailInput.placeholder = "Please enter your email address";
        return false;
    } 
    
    else if (!isValidEmail(emailInput.value)) {
        emailInput.style.border = "solid red 2px";
        emailInput.style.backgroundColor = "pink";
        emailInput.placeholder = "Please enter a valid email address";
        return false;
    }

    function isValidEmail(email) {
        let atIndex = email.indexOf('@');
        let dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex + 2;
    }
    submitModalContainer.style.display = "block";
});

// WHEN USER CLICKS CLOSE, THE POP UP DISAPPEARS
submitModalBtn.addEventListener('click', function () {
    submitModalContainer.style.display = "none";
    inputs.forEach(input => {
        if (input.type === 'checkbox'){
            input.checked = false;
        } 
        else {
        input.value = '';
        input.style.border = '';
        input.style.backgroundColor = '';
        input.placeholder = '';
        }
    })
})



