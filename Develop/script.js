// Get references to the DOM elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Function to generate a random password
function generatePassword() {
  // Define character sets
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Prompt user for password criteria
  var passwordLength = prompt("Enter the length of the password (8-128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Construct character set based on user criteria
  var charset = "";
  if (includeLowerCase) {
    charset += lowerCaseChars;
  }
  if (includeUpperCase) {
    charset += upperCaseChars;
  }
  if (includeNumeric) {
    charset += numericChars;
  }
  if (includeSpecial) {
    charset += specialChars;
  }

  // Generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Function to handle button click event
function handleGenerateBtnClick() {
  var password = generatePassword();
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", handleGenerateBtnClick);
