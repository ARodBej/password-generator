
var enter;
var confirmUpCase;
var confirmLowCase;
var confirmNum;
var confirmChar;
var passwordLength;
var finishedPassword;
//options for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  finishedPassword = ""; 
  //if the user enters in a number that isn't bwtween 8 and 128, will be asked to choose again
  enter = parseInt(prompt("How many characters do you want you password to be m'lord? You can choose between 8 - 128."));
   if (!enter) {
    alert("Enter a number m'lord.");
   } else if (enter < 8 || enter > 128) {
     enter = parseInt(prompt("Please choose a valid number m'lord."));
      }
      //confirming the numbers
     confirmNum = confirm("Would you like numbers m'lord?") 
      if (confirmNum == true) {
        //its combining the finished passowrd with a random number from the number array
        finishedPassword = finishedPassword + number[Math.floor(Math.random() * number.length)];
      }
      //confirming using special characters
      confirmChar = confirm("Feeling fancy with special characters m'lord?");
      if (confirmChar == true) {
        //combining the finished password with a random number and a random special character if they say yes
        finishedPassword = finishedPassword +  char[Math.floor(Math.random() * char.length)];
      }
      //confirming if they want upper case in the password
      confirmUpCase = confirm("Does your password require upper case m'lord?");
      if (confirmUpCase == true) {
        //combining the finished password with random numbers, special characters and upper case
        finishedPassword = finishedPassword + upperCase[Math.floor(Math.random() *upperCase.length)];
      }
      //confirming if they want lower case in the password
      confirmLowCase = confirm("Does your passowrd require lower case m'lord?");
      if (confirmLowCase == true) {
        //combining the final password with a random number, special characters, upper case and lower case
        finishedPassword = finishedPassword + lowerCase[Math.floor(Math.random() * lowerCase.length)];
      }
      //want to keep adding characters to the password until it reaches the number the user put in
      while (finishedPassword.length < enter) {
        finishedPassword = finishedPassword + number[Math.floor(Math.random() * number.length)] + char[Math.floor(Math.random() * char.length)] + upperCase[Math.floor(Math.random() *upperCase.length)] + lowerCase[Math.floor(Math.random() * lowerCase.length)];
      }
  

  return finishedPassword;
  }
// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
//this puts it on the screen
  passwordText.value = password;

  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

