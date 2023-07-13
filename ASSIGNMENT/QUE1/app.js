function checkEligibility(){
    // Get the value entered by the user
    let ageInput = document.getElementById('age');
    
    // Convert the entered value to a number
    let age = +ageInput.value;

    // Check if the age is greater than or equal to 18
    var resultElement = document.getElementById("result");
    if (age >= 18) {
      resultElement.textContent = "You are eligible to vote.";
    } else {
      resultElement.textContent = "You are not eligible to vote yet.";
    }
       }
    
    
    
    
    
