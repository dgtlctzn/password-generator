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
  var specials = "`~!@#$%^&*()_-+={}[]|':;<>,.?/";
  var digits = "0123456789";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // var passLength = parseInt(prompt("How many characters would you like the password to contain?"));
  var correctLength = false;
  while (!correctLength) {

    var passLength = prompt("How many characters would you like the password to contain?");

    if (parseInt(passLength) > 7 && parseInt(passLength) < 129) {
      var upperChoice = confirm("Do you want upper case letters in the password?");
      var lowerChoice = confirm("Do you want lower case letters in the password?");
      var digitChoice = confirm("Do you want numbers in the password?");
      var specialChoice = confirm("Do you want special characters in the password?");
    
      if (upperChoice) {
        master.push(letters)
      } if (lowerChoice) {
        master.push(letters.toLowerCase());
      } if (digitChoice) {
        master.push(digits)
      } if (specialChoice) {
        master.push(specials)
      } else if (master.length === 0) {
        alert("Please select at least one character type for password generation");
      }

      correctLength = true;
      
    } else if (passLength === null) {
      break;
    } else {
      alert("Please select a character length between 8 and 128 characters");
    }
  }
  
  console.log(passLength);

  // var upperChoice = confirm("Do you want upper case letters in the password?");
  // var lowerChoice = confirm("Do you want lower case letters in the password?");
  // var digitChoice = confirm("Do you want numbers in the password?");
  // var specialChoice = confirm("Do you want special characters in the password?");

  // if (upperChoice) {
  //   master.push(letters)
  // } if (lowerChoice) {
  //   master.push(letters.toLowerCase());
  // } if (digitChoice) {
  //   master.push(digits)
  // } if (specialChoice) {
  //   master.push(specials)
  // } else if (master.length === 0) {
  //   alert("Please select at least one character type for password generation");
  // }

  console.log(master)
}

generateBtn.addEventListener("click", writePassword);
