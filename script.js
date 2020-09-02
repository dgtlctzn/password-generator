// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var master = [];
  var characters = "`~!@#$%^&*()_-+={}[]|':;<>,.?/"
  var digits = "0123456789"
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var upperChoice = confirm("Do you want upper case letters in the password?")
  var lowerChoice = confirm("Do you want lower case letters in the password?")
  var digitChoice = confirm("Do you want numbers in the password?")
  var charChoice = confirm("Do you want special characters in the password?")

  console.log(upperChoice, lowerChoice, digitChoice, charChoice)
}

generateBtn.addEventListener("click", writePassword);
