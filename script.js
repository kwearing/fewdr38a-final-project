// JOIN ALSC FORM :: SET VARIABLES
const modalContainer = document.querySelector('.modal-container')
const yesWWC = document.querySelector('#yes-wwc')
const submitBtn = document.querySelector('.submitbtn')
const submitModalContainer = document.querySelector('#submit-modal-container')
const submitModalBtn = document.querySelector('#submit-modal-button')
const form = document.querySelector('.form')
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
    submitModalContainer.style.display = "block";
})

// WHEN USER CLICKS CLOSE, THE POP UP DISAPPEARS
submitModalBtn.addEventListener('click', function () {
    submitModalContainer.style.display = "none";
    inputs.forEach(input => {
        input.value = '';
    })
})
