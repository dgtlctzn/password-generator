// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

function generatePassword() {

  // master array and all possible characters
  var userChoice = [];
  var specials = "`~!@#$%^&*()_-+={}[]|':;<>,.?/";
  var digits = "0123456789";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // enables user to break out of prompts
  var correctLength = false;
  while (!correctLength) {

    // user's choice for character length and type
    var passLength = prompt("How many characters would you like the password to contain?");

    if (parseInt(passLength) > 7 && parseInt(passLength) < 129) {
      var upperChoice = confirm("Do you want upper case letters in the password?");
      var lowerChoice = confirm("Do you want lower case letters in the password?");
      var digitChoice = confirm("Do you want numbers in the password?");
      var specialChoice = confirm("Do you want special characters in the password?");
    
      // adds characters to userChoice array if chosen by user
      if (upperChoice) {
        userChoice.push(letters)
      } if (lowerChoice) {
        userChoice.push(letters.toLowerCase());
      } if (digitChoice) {
        userChoice.push(digits)
      } if (specialChoice) {
        userChoice.push(specials)
      } else if (userChoice.length === 0) {
        alert("Please select at least one character type for password generation");
        break;
      }

      var password = "";
      for (var i = 0; i < parseInt(passLength); i++) {
        // selects a random number based on the userChoice array length
        var randCharType = Math.floor(Math.random() * userChoice.length);
        // selects a random number based on the length of the chosen character string      
        var randCharIndex = Math.floor(Math.random() * userChoice[randCharType].length);
        // retrieves a random string within the array and a random character within that string
        password += userChoice[randCharType][randCharIndex];
      }

      correctLength = true;

    } else if (passLength === null) {
      break;
    } else {
      alert("Please select a character length between 8 and 128 characters");
    }
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
