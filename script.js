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
  var password = generatePassword (prompt("How many characters would you like your password to contain?"));

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

    alert(`Your password will have ${confirmLength} characters`);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
