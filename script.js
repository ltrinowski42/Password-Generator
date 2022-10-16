// Generator Code
var generateBtn = document.querySelector("#generate");


//Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Declarations
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;


// Password function
function writePassword() {
  var password = generatePassword (prompt("How many characters would you like your password to have?"));

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters. Try again!");
    var confirmLength = (prompt("How many characters would you like your password to have?"));
    } 

    alert(`Your password will have ${confirmLength} characters`);

    var confirmLowerCase = confirm("Click ok include lowercase characters");
    var confirmUpperCase = confirm("Click ok to include uppercase characters");
    var confirmNumericCharacter = confirm("Click ok to include numeric characters"); 
    var confirmSpecialCharacter = confirm("Click ok to include special characters");
       
  while(confirmLowerCase === false && confirmUpperCase === false && confirmNumericalCharacter === false && confirmSpecialCharacter === false) {
      alert("Please choose a criteria");
      var confirmLowerCase = confirm("Click ok to include lowercase letters");
      var confirmUpperCase = confirm("Click ok to include uppercase letters");
      var confirmNumericalCharacter = confirm("Click ok to include numbers");    
      var confirmSpecialCharacter = confirm("Click ok to include special characters");   
  } 

  var passwordCharacters = []

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }
      
  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

    console.log(passwordCharacters)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
