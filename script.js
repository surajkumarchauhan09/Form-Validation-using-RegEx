// Add an event listener to the password input element
password.addEventListener('input', (event) => {
    const inputValue = event.target.value;  // Get the value of the input element
    document.querySelectorAll("ul li[data-pattern]").forEach((listElement) => {
        const regex = new RegExp(listElement.dataset.pattern);  // Create a regular expression object
        (regex.test(inputValue)) ? listElement.classList.add("match") : listElement.classList.remove("match");
    });
});

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the default form submission
});

// mobileNumber.addEventListener('keypress', (event) => {
//     if(/\D/.test(event.key)) event.preventDefault();  // Prevent non-digit characters
// });