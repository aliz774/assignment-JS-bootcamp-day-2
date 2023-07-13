
function convertDollarsToRupees() {

    // Enter the amount in dollars
    var dollars = parseFloat(document.getElementById("dollarsInput").value);

    // Convert dollars to rupees using the conversion rate of 1 dollar = 82.07 rupees
    var rupees = dollars * 82.07;

    // Display the converted amount to the user
    document.getElementById("result").innerHTML = dollars.toLocaleString() + " Dollars is equal to " + rupees.toLocaleString() + " Indian Rupees.";
  }