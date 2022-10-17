var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


function generatePassword() {
  var confirmLength = (prompt("How many character do you want your password to be?"));


  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password must be between 8-128 characters long!");
      var confirmLength = (prompt("How long would you like your password to be?"));
      } 


      alert(`Your password will be ${confirmLength} characters long`);


    var confirmUpperCase = confirm("Would you like upper case letters in your password?");
    var confirmLowerCase = confirm("Would you like lower case letters in your password?");
    var confirmNumericCharacter = confirm("Would you like numbers in your password?"); 
    var confirmSpecialCharacter = confirm("Would you like special characters in your password?");  
      
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must have at least one criteria!");
        var confirmUpperCase = confirm("Would you like upper case letters in your password?");
        var confirmLowerCase = confirm("Would you like lower case letters in your password?");
        var confirmNumericCharacter = confirm("Would you like numbers in your password?");   
        var confirmSpecialCharacter = confirm("Would you like special characters in your password?"); 
          
    } 


      var passwordCharacters = []
      
    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperCase)
    }

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(numericCharacter)
    }

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialCharacter)
    }

      console.log(passwordCharacters)

      
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

generateBtn.addEventListener("click", writePassword);
