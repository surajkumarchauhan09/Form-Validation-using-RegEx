const passwordInput = document.querySelector('#password');  // Select the password input element

const allPatternListElements = document.querySelectorAll('ul li[pattern]');  // Select all the list elements with the pattern attribute

console.log(allPatternListElements);
// Add an event listener to the password input element
passwordInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;  // Get the value of the input element
    allPatternListElements.forEach((listElement) => {
        const pattern = listElement.getAttribute('pattern');  // Get the pattern attribute value
        const regex = new RegExp(pattern);  // Create a regular expression object
        const isMatch = regex.test(inputValue);  // Test the input value against the regular expression
        if (isMatch) {
            listElement.classList.add('match');  // Add the match class
        } else {
            listElement.classList.remove('match');  // Remove the match class
        }
    });

});