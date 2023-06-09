// Get all form fields and btn
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");
const submitBtn = document.getElementById("submit-btn")
var numsCount = 0;
var specialsCount = 0;
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specials = ["!", "@", "#", "$", "~", "`", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "?"]

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nameValue = name.value.toLowerCase();
    const usernameValue = username.value;
    const passwordValue = password.value;
    const confirmationValue = confirmation.value;

    for (let char of nameValue) {
        // If its not alphabet
        if ((char < "a" || char > "z") && char !== " ") {
            alert("Name should only be letters");
            break;
        }
    }
    // username is atleast 7 chars long
    if (usernameValue.length < 7) {
        alert("Username should be atleast 7 characters long")
    }
    // email '@' validation
    const emailValue = email.value;
    if (!emailValue.includes("@")) {
        alert("Invalid email")
    }
    // password is atleast 8 chars long
    if (passwordValue.length < 8) {
        alert("Password should be atleast 8 characters long")
    }
    // First letter check
    if (passwordValue[0] < "A" || passwordValue[0] > "Z") {
        alert("First letter of password must be capital")
    }
    // add numcount if num found
    for (let num of nums) {
        if (passwordValue.includes(num)) {
            numsCount++;
        }
    }
    // add specialcount if spec
    for (let special of specials) {
        if (passwordValue.includes(special)) {
            specialsCount++;
        }
    }
    if (numsCount === 0 || specialsCount === 0) {
        alert("Password must contain atleast one digit and atleast one special character")
    }

    if (passwordValue !== confirmationValue) {
        alert("Passwords do not match")
    }
})
