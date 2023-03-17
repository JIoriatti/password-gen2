

//password content objects

const specialChars = ['!','@',"#",'$','%','^','&','*','(',')',"'",',','.']
const upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseLetters = upperCaseLetters.map((letter)=> letter.toLowerCase());
const numbers =[1,2,3,4,5,6,7,8,9]




const validateUserAnswer =(answer, prompt)=>{
  if(answer === null){
    return false;
  }
  if(answer === ''){
    return true
  }
  alert('Please click OK for "yes", or Cancel for "no".')
  return prompt();
}
const promptPassLength = () =>{
  const passLength = prompt('Please enter a password between at least 8 characters and at most 128 characters.')
  if(passLength < 8 || passLength > 128 || isNaN(passLength)){
    alert('Please enter a number between 8 and 128.')
    return promptPassLength();
  }
  return passLength;
}
const promptPassLowercase =() =>{
  const passIncludeLowercase = prompt('Would you like to include lowercase characters in your password? (OK for "yes", Cancel for "no".)')
  return validateUserAnswer(passIncludeLowercase, promptPassLowercase);
}
const promptPassUppercase =()=>{
  const passIncludeUppercase = prompt('Would you like to include uppercase characters in your password? (OK for "yes", Cancel for "no".)');
  return validateUserAnswer(passIncludeUppercase, promptPassUppercase);
}
const promptPassNumbers =() =>{
  const passIncludeNumbers = prompt('Would you like to include numbers in your password? (OK for "yes", Cancel for "no".)')
  return validateUserAnswer(passIncludeNumbers, promptPassNumbers);
}
const promptPassSpecialChars =() =>{
  const passIncludeSpecialChars = prompt('Would you like to include special characters in your password? (OK for "yes", Cancel for "no".)')
  return validateUserAnswer(passIncludeSpecialChars, promptPassSpecialChars);
}

const generatePassword = () =>{
  const passLengthAnswer = promptPassLength();
  const passLowercaseAnswer = promptPassLowercase();
  const passUppercaseAnswer = promptPassUppercase();
  const passNumberAnswer = promptPassNumbers();
  const passSpecialCharsAnswer = promptPassSpecialChars();
  
  let totalCharSet=[]

  if(!passLowercaseAnswer && !passUppercaseAnswer && !passNumberAnswer && !passSpecialCharsAnswer){
    alert('At least one character type must be selected!')
    return generatePassword();
  }
  if(passLowercaseAnswer){
    totalCharSet = [...totalCharSet, ...lowerCaseLetters]
  }
  if(passUppercaseAnswer){
    totalCharSet = [...totalCharSet, ...upperCaseLetters]
  }
  if(passSpecialCharsAnswer){
    totalCharSet = [...totalCharSet, ...specialChars]
  }
  if(passNumberAnswer){
    totalCharSet = [...totalCharSet, ...numbers]
  }
  let pass =''
  for(let i=0;i<passLengthAnswer;i++){
    let n = totalCharSet.length;
    let concatedCharSet = totalCharSet.join('')
    pass += concatedCharSet.charAt(Math.random() * n)
  }
  console.log(totalCharSet);
  console.log(passLengthAnswer, passLowercaseAnswer, passUppercaseAnswer, passNumberAnswer, passSpecialCharsAnswer)
  return pass;
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
