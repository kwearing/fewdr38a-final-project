// SET VARIABLES
const modalContainer = document.querySelector('.modal-container')
const yesWWC = document.querySelector('#yes-wwc')
const submitBtn = document.querySelector('.submitbtn')
const submitModalContainer = document.querySelector('#submit-modal-container')
const submitModalBtn = document.querySelector('#submit-modal-button')

// WHEN PAGE LOADS, SHOW POPUP 
window.addEventListener('load', function() {
    setTimeout (
        function () {
            if (modalContainer.style.opacity <= 1) {
                modalContainer.style.opacity += 0.1
            }
        }, 300);
})

// WHEN USER SELECTS I HAVE A WWC, CLOSE THE POPUP
yesWWC.addEventListener('click', function() {
    modalContainer.style.display = "none"
})

// WHEN USER HITS SUBMIT, A POP UP APPEARS
submitBtn.addEventListener('click', function () {
    submitModalContainer.style.display = "block"
})

// WHEN USER CLICKS CLOSE, THE POP UP DISAPPEARS
submitModalBtn.addEventListener('click', function () {
    submitModalContainer.style.display = "none"
})