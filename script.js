// Assignment code here

// generatePassword function expression
var generatePassword = function () {
  var char = {
    // collection of letters, numbers, and symbols to be used
    lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    lowUp: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowNum: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowSpec: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    upNum: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    upSpec: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    numSpec: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    lowUpNum: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowUpSpec: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    lowNumSpec: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    upNumSpec: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
    all: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}", ":", ";", "'", "/", ".", "?", "+", "=", "<", ">"],
  }

  // prompt for password length
  var passLength = window.prompt("Please select a password length (between 8 and 128).");
  if (!passLength || passLength > 128 || passLength < 8 || isNaN(passLength)) {
    alert("You made an invalid entry. Please click 'Generate Password' again.");
    return;    
  } else {
    alert("You selected a password length of " + passLength + " characters.");
  }
  
  // prompt to determine if lowercase letters are to be used
  var passLow = window.confirm("Would you like to include lowercase characters?");
  // if statement confirming lowercase character selection
  if (passLow) {
    alert("You chose to include lowercase characters.");
  } else {
    alert("You chose not to include lowercase characters.");
  }
  
  // prompt to determine if uppercase letters are to be used
  var passUp = window.confirm("Would you like to include uppercase characters?");
  // if statement confirming uppercase character selection
  if (passUp) {
    alert("You chose to include uppercase characters.");
  } else {
    alert("You chose not to use uppercase characters in your password.");
  }
  
  // prompt to determine if number are to be used
  var passNum = window.confirm("Would you like to include numbers?");
  // if statement confirming number selection
  if (passNum) {
    alert("You chose to include numbers.")
  } else {
    alert("You chose not to include numbers in your password.")
  }
  
  // prompt to determine if special characters are to be used
  var passSpec = window.confirm("Would you like to include special characters as part of your password?")
  // if statement to confirm special characters selection
  if (passSpec) {
    alert("You chose to include special characters.")
  } else {
    alert("You chose not to include special characters in your password.")
  }
  
  // function to determine what characters to use
  var typeselect = ""
  var typeselector = function () {
    if (passLow && !passUp && !passNum && !passSpec) {    // true when only lowercase characters selected
      typeselect = "a";
    } else {
      if (!passLow && passUp && !passNum && !passSpec) {  // true when only uppercase characters selected
        typeselect = "b";
      }
    } if (!passLow && !passUp && passNum && !passSpec) {  // true when only numbers are selected
      typeselect = "c";
    } else {
      if (!passLow && !passUp && !passNum && passSpec) {  // true when only special characters are selected
        typeselect = "d";
      }
    } if (passLow && passUp && !passNum && !passSpec) {   // true when only upper and lowercase characters are selected
      typeselect = "e";
    } else {
      if (passLow && !passUp && passNum && !passSpec) {   // true when only lowercase and numerical characters are selected
        typeselect = "f";
      }
    } if (passLow && !passUp && !passNum && passSpec) {   // true when only lowercase and special characters are selected
      typeselect = "g";
    } else {
      if (!passLow && passUp && passNum && !passSpec) {   // true when only uppercase and numerical characters are selected
        typeselect = "h";
      }
    } if (!passLow && passUp && !passNum && passSpec) {   // true when only uppercase and special characters are selected
      typeselect = "i";
    } else {
      if (!passLow && !passUp && passNum && passSpec) {   // true when only numbers and special characters are selected
        typeselect = "j";
      }
    } if (passLow && passUp && passNum && !passSpec) {    // true when only lower/uppercase characters and numbers are selected
      typeselect = "k";
    } else {
      if (passLow && passUp && !passNum && passSpec) {    // true when only lower/uppercase and special characters are selected
        typeselect = "l";
      }
    } if (passLow && !passUp && passNum && passSpec) {    // true when only lowercase, numerical, and special characters are selected
      typeselect = "m";
    } else {
      if (!passLow && passUp && passNum && passSpec) {    // true when only uppercase, numerical, and special characters are selected
        typeselect = "n";
      }
    } if (passLow && passUp && passNum && passSpec) {     // true when all characters are selected
      typeselect = "o";
    } else {
      if (!passLow && !passUp && !passNum && !passSpec) { // true when no character selection is made
        typeselect = "p";
      }
    }
  }

  // typeselector function call
  typeselector();

  // switch for determining which loop to run based on user input/character selection determined
  switch (typeselect) {
    // lowercase only
    case "a":
      var lowPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLow = parseInt(Math.random() * 26);
        lowPass = (lowPass + char.lower[ranLow]);
      }
      return lowPass;
    // uppercase only
    case "b":
      var upPass = "";
      for (var i = 0; i < passLength; i++) {
        ranUp = parseInt(Math.random() * 26);
        upPass = (upPass + char.upper[ranUp]);
      }
      return upPass;
    // numbers only
    case "c":
      var numPass = "";
      for (var i = 0; i < passLength; i++) {
        ranNum = parseInt(Math.random() * 10);
        numPass = (numPass + char.number[ranNum]);
      }
      return numPass;
    // special characters
    case "d":
      var specPass = "";
      for (var i = 0; i < passLength; i++) {
        ranSpec = parseInt(Math.random() * 28);
        specPass = (specPass + char.special[ranSpec]);
      }
      return specPass;
    // lower and uppercase only
    case "e":
      var lowUpPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLowUp = parseInt(Math.random() * 52);
        lowUpPass = (lowUpPass + char.lowUp[ranLowUp]);
      }
      return lowUpPass;
    // lowercase and numbers only
    case "f":
      var lowNumPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLowNum = parseInt(Math.random() * 36);
        lowNumPass = (lowNumPass + char.lowNum[ranLowNum]);
      }
      return lowNumPass;
    // lowercase and special characters only
    case "g":
      var lowSpecPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLowSpec = parseInt(Math.random() * 54);
        lowSpecPass = (lowSpecPass + char.lowSpec[ranLowSpec]);
      }
      return lowSpecPass;
    // uppercase and numbers only
    case "h":
      var upNumPass = "";
      for (var i = 0; i < passLength; i++) {
        ranUpNum = parseInt(Math.random() * 36);
        upNumPass = (upNumPass + char.upNum[ranUpNum]);
      }
      return upNumPass;
    // uppercase and special characters only
    case "i":
      var upSpecPass = "";
      for (var i = 0; i < passLength; i++) {
        ranUpSpec = parseInt(Math.random() * 54);
        upSpecPass = (upSpecPass + char.upSpec[ranUpSpec]);
      }
      return upSpecPass;
    // numbers and special characters only
    case "j":
      var numSpecPass = "";
      for (var i = 0; i < passLength; i++) {
        ranNumSpec = parseInt(Math.random() * 38);
        numSpecPass = (numSpecPass + char.numSpec[ranNumSpec]);
      }
      return numSpecPass;
    // lower/uppercase and numbers only
    case "k":
      var lowUpNumPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLowUpNum = parseInt(Math.random() * 62);
        lowUpNumPass = (lowUpNumPass + char.lowUpNum[ranLowUpNum]);
      }
      return lowUpNumPass;
    // lower/uppercase and special characters only
    case "l":
      var lowUpSpecPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLowUpSpec = parseInt(Math.random() * 80);
        lowUpSpecPass = (lowUpSpecPass + char.lowUpSpec[ranLowUpSpec]);
      }
      return lowUpSpecPass;
    // lowercase, numbers, and special characters only
    case "m":
      var lowNumSpecPass = "";
      for (var i = 0; i < passLength; i++) {
        ranLowNumSpec = parseInt(Math.random() * 64);
        lowNumSpecPass = (lowNumSpecPass + char.lowNumSpec[ranLowNumSpec]);
      }
      return lowNumSpecPass;
    // uppercase, numbers, and special characters only
    case "n":
      var upNumSpecPass = "";
      for (var i = 0; i < passLength; i++) {
        ranUpNumSpec = parseInt(Math.random() * 64);
        upNumSpecPass = (upNumSpecPass + char.upNumSpec[ranUpNumSpec]);
      }
      return upNumSpecPass;
    // all characters
    case "o":
      var allPass = "";
      for (var i = 0; i < passLength; i++) {
        ranAll = parseInt(Math.random() * 90);
        allPass = (allPass + char.all[ranAll]);
      }
      return allPass;
    // default action if no characters are selected 
    default:
      window.alert("Minimum 1 character type required. All characters types will automatically be used. Or click 'Generate Password' to try again.")
      var allPass = "";
      for (var i = 0; i < passLength; i++) {
        ranAll = parseInt(Math.random() * 90);
        allPass = (allPass + char.all[ranAll]);
      }
      return allPass;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
