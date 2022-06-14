// Assignment code here

// generatePassword function expression
var generatePassword = function() {
  var char = {
    lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    number: ["0","1","2","3","4","5","6","7","8","9"],
    special: ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],    
    lowUp: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowNum: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],
    lowSpec: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
    upNum: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
    upSpec: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
    numSpec: ["0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
    lowUpNum: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
    lowUpSpec: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
    lowNumSpec: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
    upNumSpec: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
    all: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}",":",";","'","/",".","?","+","=","<",">"],
  }
  var lowerOpt = "";
  var upperOpt = "";
  var numberOpt = "";
  var specOpt = "";
  var lowUpOpt = "";
  var lowNumOpt = "";
  var lowSpecOpt = "";
  var upNumOpt = "";
  var upSpecOpt = "";
  var numSpecOpt = "";
  var lowUpNumOpt = "";
  var lowUpSpecOpt = "";
  var lowNumSpecOpt = "";
  var upNumSpecOpt = "";
  var allOpt = "";

  // }

  // Start - Section of test variables for character selection
  // var ranLow = parseInt(Math.random() * 26);
  // console.log(ranLow + " " + char.lower[ranLow]);

  // var ranUp = parseInt(Math.random() * 26);
  // console.log(ranUp + " " + char.upper[ranUp]);

  // var ranNum = parseInt(Math.random() * 10);
  // // console.log(ranNum + " " + char.number[ranNum]);

  // var ranSpec = parseInt(Math.random() * 28);
  // console.log(ranSpec + " " + char.special[ranSpec]);

  // var ranLowUp = parseInt(Math.random() * 52);
  // console.log(ranLowUp + " " + char.lowUp[ranLowUp]);

  // var ranLowNum = parseInt(Math.random() * 36);
  // console.log(ranLowNum + " " + char.lowNum[ranLowNum]);

  // var ranUpNum = parseInt(Math.random() * 36);
  // console.log(ranUpNum + " " + char.upNum[ranUpNum]);

  // var ranLowUpNum = parseInt(Math.random() * 62);
  // console.log(ranLowUpNum + " " + char.lowUpNum[ranLowUpNum]);

  // var ranLowUpSpec = parseInt(Math.random() * 80);
  // console.log(ranLowUpSpec + " " + char.lowUpSpec[ranLowUpSpec]);

  // var ranLowNumSpec = parseInt(Math.random() * 64);
  // console.log(ranLowNumSpec + " " + char.lowNumSpec[ranLowNumSpec]);

  // var ranUpNumSpec = parseInt(Math.random() * 64);
  // console.log(ranUpNumSpec + " " + char.upNumSpec[ranUpNumSpec]);

  // var ranAll = parseInt(Math.random() * 90);
  // console.log(ranAll + " " + char.all[ranAll]);
  // End - Section of test variables for character selection
// }  

  // debugger

  // Password length prompt - working
  var passLength = window.prompt("Please select a password length (between 8 and 128).");
  if (!passLength || passLength>128 || passLength<8) {
    alert("You made an invalid entry. Try again.");
    generatePassword();
  } else {
  alert("You selected a password length of " + passLength + " characters.");
  }
  console.log("Password " + passLength);

  // Lowercase letters prompt - working
  var passLow = window.confirm("Would you like to include lowercase characters?");
  // if statement confirming lowercase character selection
  if (passLow) {
    alert("You chose to include lowercase characters.");
  } else {
    alert("You chose not to include lowercase characters.");
  }
  console.log("Lower " + passLow);

  // Uppercase letter prompt - working
  var passUp = window.confirm("Would you like to include uppercase characters?");
  // if statement confirming uppercase character selection
  if (passUp) {
    alert("You chose to include uppercase characters.");
  } else {
    alert("You chose not to use uppercase characters in your password.");
  }
  console.log("Upper " + passUp);
  
  // Numbers prompt - working
  var passNum = window.confirm("Would you like to include numbers?");
  // if statement confirming number selection
  if (passNum) {
    alert("You chose to include numbers.")
  } else {
    alert("You chose not to include numbers in your password.")
  }
  console.log("Numbers " + passNum);

  // Special characters prompt - working
  var passSpec = window.confirm("Would you like to include special characters as part of your password?")

  // if statement to confirm if special characters will be used
  if (passSpec) {
    alert("You chose to include special characters.")
  } else {
    alert("You chose not to include special characters in your password.")
  }
  console.log("Special " + passSpec);

  // debugger
  var typeselect=""
  var typeselector = function() {
    if(passLow&&!passUp&&!passNum&&!passSpec) {
      typeselect = "a";
    } else {
      if(!passLow&&passUp&&!passNum&&!passSpec) {
        typeselect = "b";
      }
    } if(!passLow&&!passUp&&passNum&&!passSpec) {
        typeselect = "c";
    } else {
      if(!passLow&&!passUp&&!passNum&&passSpec) {
        typeselect = "d";
      }
    } if(passLow&&passUp&&!passNum&&!passSpec) {
        typeselect = "e";
    } else {
      if(passLow&&!passUp&&passNum&&!passSpec) {
        typeselect = "f";
      }
    } if(passLow&&!passUp&&!passNum&&passSpec) {
        typeselect = "g";
    } else {
      if(!passLow&&passUp&&passNum&&!passSpec) {
        typeselect = "h";
      }
    } if(!passLow&&passUp&&!passNum&&passSpec) { //indicates uppercase and special characters were selected
        typeselect = "i";
    } else {
      if(!passLow&&!passUp&&passNum&&passSpec) { //indicated numbers and special characters were selected
        typeselect = "j";
      }
    } if(passLow&&passUp&&passNum&&!passSpec) { //indicates that lower/uppercase characters and numbers were selected
        typeselect = "k";
    } else {
      if(passLow&&passUp&&!passNum&&passSpec) { //indicates that lower/uppercase and special characters were selected
        typeselect = "l";
      }
    } if(passLow&&!passUp&&passNum&&passSpec) { //indicates that lowercase, numerical, and special characters were selected
        typeselect = "m";
    } else {
      if(!passLow&&passUp&&passNum&&passSpec) { //indicates that uppercase, numerical, and special characters were selected
        typeselect = "n";
      }
    } if(passLow&&passUp&&passNum&&passSpec) { //indicates that all characters were selected
        typeselect = "o";
    } else {
      if(!passLow&&!passUp&&!passNum&&!passSpec) { //indicates that no selection was made
        typeselect = "p";
      } 
    }
  }
  
  typeselector();
  
// debugger
  switch(typeselect) {
    // lowercase only - working
    case "a": 
       var lowPass = "";  
       for (var i = 0; i < passLength; i++) {
         ranLow = parseInt(Math.random() * 26);
         lowPass = (lowPass + char.lower[ranLow]);
         console.log(lowPass);
        }
       console.log(lowPass);
       return lowPass;

    // uppercase only - working
    case "b":
        var upPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranUp = parseInt(Math.random() * 26);
          upPass = (upPass + char.upper[ranUp]);
        }
        console.log(upPass);
        return upPass;
  
    // numbers only - working
    case "c":
        var numPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranNum = parseInt(Math.random() * 10);
          numPass = (numPass + char.number[ranNum]);
        }
        console.log(numPass);
        return numPass;

    // special characters only
    case "d":
          var specPass = "";  
          for (var i = 0; i < passLength; i++) {
            ranSpec = parseInt(Math.random() * 28);
            specPass = (specPass + char.special[ranSpec]);
            console.log(specPass)
          }
          console.log(specPass);
          return specPass;
          
    // lower and uppercase only - working
    case "e":
          var lowUpPass = "";  
          for (var i = 0; i < passLength; i++) {
            ranLowUp = parseInt(Math.random() * 52);
            lowUpPass = (lowUpPass + char.lowUp[ranLowUp]);
          }
          console.log(lowUpPass);
          return lowUpPass;
       
    // lowercase and numbers only - working
    case "f":
          var lowNumPass = "";  
          for (var i = 0; i < passLength; i++) {
            ranLowNum = parseInt(Math.random() * 36);
            lowNumPass = (lowNumPass + char.lowNum[ranLowNum]);
          }
          console.log(lowNumPass);
          return lowNumPass;
        
    // lowercase and special characters only - working
    case "g":
      var lowSpecPass = "";  
      for (var i = 0; i < passLength; i++) {
        ranLowSpec = parseInt(Math.random() * 54);
        lowSpecPass = (lowSpecPass + char.lowSpec[ranLowSpec]);
      }
      console.log(lowSpecPass);
      return lowSpecPass;
        
    // uppercase and numbers only - working
    case "h":
        var upNumPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranUpNum = parseInt(Math.random() * 36);
          upNumPass = (upNumPass + char.upNum[ranUpNum]);
        }
        console.log(upNumPass);
        return upNumPass;
    // uppercase and special characters only - working
    case "i":
          var upSpecPass = "";  
          for (var i = 0; i < passLength; i++) {
            ranUpSpec = parseInt(Math.random() * 54);
            upSpecPass = (upSpecPass + char.upSpec[ranUpSpec]);
          }
          console.log(upSpecPass);
          return upSpecPass;

    // numbers and special characters only - working
    case "j":
      var numSpecPass = "";  
      for (var i = 0; i < passLength; i++) {
        ranNumSpec = parseInt(Math.random() * 38);
        numSpecPass = (numSpecPass + char.numSpec[ranNumSpec]);
      }
      console.log(numSpecPass);
      return numSpecPass;
    // lower/uppercase and numbers only - working
    case "k":
      var lowUpNumPass = "";  
      for (var i = 0; i < passLength; i++) {
        ranLowUpNum = parseInt(Math.random() * 62);
        lowUpNumPass = (lowUpNumPass + char.lowUpNum[ranLowUpNum]);
      }
      console.log(lowUpNumPass);
      return lowUpNumPass;

    // lower/uppercase and special characters only - working
    case "l":
        var lowUpSpecPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranLowUpSpec = parseInt(Math.random() * 80);
          lowUpSpecPass = (lowUpSpecPass + char.lowUpSpec[ranLowUpSpec]);
        }
        console.log(lowUpSpecPass);
        return lowUpSpecPass;
    // lowercase, numbers, and special characters only - working
    case "m":
        var lowNumSpecPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranLowNumSpec = parseInt(Math.random() * 64);
          lowNumSpecPass = (lowNumSpecPass + char.lowNumSpec[ranLowNumSpec]);
        }
        console.log(lowNumSpecPass);
        return lowNumSpecPass;
    // uppercase, numbers, and special characters only - working
    case "n":
        var upNumSpecPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranUpNumSpec = parseInt(Math.random() * 64);
          upNumSpecPass = (upNumSpecPass + char.upNumSpec[ranUpNumSpec]);
        }
        console.log(upNumSpecPass);
        return upNumSpecPass;
    // all characters
    case "o":
        var allPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranAll = parseInt(Math.random() * 90);
          allPass = (allPass + char.all[ranAll]);
        }
        console.log(allPass);
        return allPass;
    // if no selection, select all characters
    default:
        window.alert("No selection was made. All characters will be used.")
        var allPass = "";  
        for (var i = 0; i < passLength; i++) {
          ranAll = parseInt(Math.random() * 90);
          allPass = (allPass + char.all[ranAll]);
        }
        console.log(allPass);
        return allPass;
    //   window.prompt("No selection was made. Your password will consist of lower and uppercase letters, numbers, and special characters");
      } 
}



// -------------------No Touchy below this line!-------------------------------
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
