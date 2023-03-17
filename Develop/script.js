// Assignment code here


const generatePassword = () =>{
  const passLength = prompt('Please enter a password between at least 8 characters and at most 128 characters. (y/n)')
  const passIncludeLowercase = prompt('Would you like to include lowercase characters in your password? (y/n)')
  const passIncludeUppercase = prompt('Would you like to include uppercase characters in your password? (y/n)')
  const passIncludeNumbers = prompt('Would you like to include numbers in your password? (y/n)')
  const passIncludeSpecialChar = prompt('Would you like to include special characters in your password? (y/n)')

  
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
