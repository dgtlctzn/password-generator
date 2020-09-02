// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(letters.length)

function generatePassword() {
  var master = [];
  var characters = "`~!@#$%^&*()_-+={}[]|':;<>,.?/"
  var digits = "0123456789"
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
