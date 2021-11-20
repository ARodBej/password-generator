

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const optionsForm = document.querySelector("#options");

function showOptions() {
  optionsForm.classList.remove("hide");
}

// Write password to the #password input
function writePassword() {
  characterLength();
  characterType();
  


 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", showOptions);
generateBtn.addEventListener("click", writePassword);

