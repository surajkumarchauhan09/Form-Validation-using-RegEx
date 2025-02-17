const passwordInput = document.querySelector('#password');  // Select the password input element
const eightCharsElement = document.querySelector('[data-eight-chars]');  // Select the element with the data-eight-chars attribute
const oneNumberElement = document.querySelector('[data-one-number]');  // Select the element with the data-one-number attribute
const upperLetterElement = document.querySelector('[data-upper-letter]');  // Select the element with the data-upper-letter attribute
const lowerLetterElement = document.querySelector('[data-lower-letter]');  // Select the element with the data-lower-letter attribute
const specialCharElement = document.querySelector('[data-special-char]');  // Select the element with the data-special-char attribute
const whiteSpaceElement = document.querySelector('[data-white-space]');  // Select the element with the data-white-space attribute
const pattern = {
    eightChars: new RegExp(eightCharsElement.dataset.eightChars),  // Create a regular expression from the data-eight-chars attribute
    oneNumber: new RegExp(oneNumberElement.dataset.oneNumber),  // Create a regular expression from the one-number attribute
    upperLetter: new RegExp(upperLetterElement.dataset.upperLetter),  // Create a regular expression from the upper-letter attribute
    lowerLetter: new RegExp(lowerLetterElement.dataset.lowerLetter),  // Create a regular expression from the lower-letter attribute
    specialChar: new RegExp(specialCharElement.dataset.specialChar), // Create a regular expression from the special-char attribute
    whiteSpace: new RegExp(whiteSpaceElement.dataset.whiteSpace)  // Create a regular expression from the white-space attribute
}
console.dir(pattern);
// Add an event listener to the password input element
passwordInput.addEventListener('input', (event) => {
    const password = event.target.value;  // Get the value of the password input element
    // Check if the password matches the eightChars pattern
    if (pattern.eightChars.test(password)) {
        eightCharsElement.classList.add('match');  // Add the match class
    } else {
        eightCharsElement.classList.remove('match');  // Remove the match class
    }
    if (pattern.oneNumber.test(password)) {
        oneNumberElement.classList.add('match');
    } else {
        oneNumberElement.classList.remove('match');
    }
    if (pattern.upperLetter.test(password)) {
        upperLetterElement.classList.add('match');
    } else {
        upperLetterElement.classList.remove('match');
    }
    if (pattern.lowerLetter.test(password)) {
        lowerLetterElement.classList.add('match');
    } else {
        lowerLetterElement.classList.remove('match');
    }
    if (pattern.specialChar.test(password)) {
        specialCharElement.classList.add('match');
    } else {
        specialCharElement.classList.remove('match');
    }
    if (pattern.whiteSpace.test(password)) {
        whiteSpaceElement.classList.add('match');
    } else {
        whiteSpaceElement.classList.remove('match');
    }
});