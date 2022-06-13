// Assignment code here

// generatePassword function expression
// var generatePassword = function() {
  // var char = {
  //   lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  //   upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  //   number: ["0","1","2","3","4","5","6","7","8","9"],
  //   spec: ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?"],    
  //   lowUp: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  //   lowNum: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],
  //   upNum: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
  //   lowUpNum: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
  //   lowUpSpec: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?"],
  //   lowNumSpec: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?"],
  //   upNumSpec: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?"],
  //   all: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?"],
  // // }

  // }

  // var ranLow = parseInt(Math.random() * 26);
  // console.log(ranLow + " " + char.lower[ranLow]);

  // var ranUp = parseInt(Math.random() * 26);
  // console.log(ranUp + " " + char.upper[ranUp]);

  // var ranNum = parseInt(Math.random() * 10);
  // console.log(ranNum + " " + char.number[ranNum]);

  // var ranSpec = parseInt(Math.random() * 24);
  // console.log(ranSpec + " " + char.spec[ranSpec]);

  // var ranLowUp = parseInt(Math.random() * 52);
  // console.log(ranLowUp + " " + char.lowUp[ranLowUp]);

  // var ranLowNum = parseInt(Math.random() * 36);
  // console.log(ranLowNum + " " + char.lowNum[ranLowNum]);

  // var ranUpNum = parseInt(Math.random() * 36);
  // console.log(ranUpNum + " " + char.upNum[ranUpNum]);

  // var ranLowUpNum = parseInt(Math.random() * 62);
  // console.log(ranLowUpNum + " " + char.lowUpNum[ranLowUpNum]);

  // var ranLowUpSpec = parseInt(Math.random() * 76);
  // console.log(ranLowUpSpec + " " + char.lowUpSpec[ranLowUpSpec]);

  // var ranLowNumSpec = parseInt(Math.random() * 60);
  // console.log(ranLowNumSpec + " " + char.lowNumSpec[ranLowNumSpec]);

  // var ranUpNumSpec = parseInt(Math.random() * 60);
  // console.log(ranUpNumSpec + " " + char.upNumSpec[ranUpNumSpec]);

  // var ranAll = parseInt(Math.random() * 86);
  // console.log(ranAll + " " + char.all[ranAll]);

  // console.log(char.all.length)
// }  
//   var lowerC = if (letters.lower[if(Math.random()*1)) <= 0); {
//     (letters.lower[(Math.random()*1)]) * 0
//   } else {
//     (letters.lower[(Math.random()*1)])
//   }

//   console.log(randomLower);
// }
  // debugger
  var passLength = window.prompt("Please select a password length (between 8 and 128).");
  if (!passLength || passLength>128 || passLength<8) {
    alert("You made an invalid entry. Try again.");
    generatePassword();
  }else {
  alert("You selected a password length of " + passLength + " characters.");
  }
  console.log(passLength);

  var passUpper = window.confirm("Would you like to include uppercase characters?");
  // if statement confirming uppercase character selection
  if (passUpper) {
    alert("You chose to include uppercase characters.");
  } else {
    alert("You chose not to use uppercase characters in your password.");
  }
  // console.log(passUpper);

  var passLower = window.confirm("Would you like to include lowercase characters?");
  // if statement confirming lowercase character selection
  if (passLower) {
    alert("You chose to include lowercase characters.");
  } else {
    alert("You chose not to include lowercase characters.");
  }
  // console.log(passLower);

  var passNum = window.confirm("Would you like to include numbers?");
  // if statement confirming number selection
  if (passNum) {
    alert("You chose to include numbers.")
  } else {
    alert("You chose not to include numbers in your password.")
  }
  // console.log(passNum);

  var passSpecial = window.confirm("Would you like to include special characters as part of your password?")
  // if statement to confirm if special characters will be used
  if (passSpecial) {
    alert("You chose to include special characters.")
  } else {
    alert("You chose not to include special characters in your password.")
  }
  // console.log(passSpecial);


  return passLength;
// }


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
