   

function generateTable() {
    let numInput = document.getElementById("numInput").value;
    let number = Number(numInput);
    if (isNaN(number)) {
      document.getElementById("tableOutput").innerText = "Invalid number. Please try again.";
    } else {
      let table = "Table of " + number + "<br>";
      for (let i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + number * i + "<br>";
      }
      document.getElementById("tableOutput").innerHTML = table;
    }
  }