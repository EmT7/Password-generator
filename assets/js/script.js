function generatePassword() {
  var myVar = prompt("How many characters would you like your password to be? Please choose between 8 & 128 characters")
  //console.log(myVar)

  if (myVar < 8 || 128 < myVar) {
    alert("You must enter a length between 8 and 128 Characters.");
    return;
  }

  var passwordLength = parseInt(myVar)


  var lowerCase = confirm("Do you want lower case letters?") 
  console.log(lowerCase)

  var upperCase = confirm("Do you want upper case letters?")
  console.log(upperCase)

  var numbers = confirm("Do you want numbers?")
  console.log(numbers)

  var specialCharacters = confirm("Do you want special characters?")
  console.log(specialCharacters)
  
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz" 

  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var numbersChoices = "0123456789"

  var specialCharactersChoicesAvailable = "-[.]\{`}|;':,<>?~!@#$%^&*()_+="

  var chosenCharacters = ""; 
  var generatedPassword; 
  if (lowerCase == true) {
    chosenCharacters = chosenCharacters + lowerCaseLetters
  }

  if (upperCase == true) {
    chosenCharacters = chosenCharacters + upperCaseLetters
  }

  if (numbers == true) {
    chosenCharacters = chosenCharacters + numbersChoices
  }

  if (specialCharacters == true) {
    chosenCharacters = chosenCharacters + specialCharactersChoicesAvailable
  }
  console.log(chosenCharacters)


  for (i = 0; i < passwordLength; i++) {
    generatedPassword=generatedPassword+chosenCharacters.charAt(Math.floor(Math.random()* Math.floor(chosenCharacters.length)));
  }
  return generatedPassword
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
