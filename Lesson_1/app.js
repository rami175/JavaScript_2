import { CalculateCircle, calculateArea } from "./circleCalculator.js";
import { convertToNumber } from "./validation.js";
document.querySelector("#submitButton").onclick = submitFunction;
document.querySelector("#submitAreaButton").onclick = submitAreaFunction;

function submitFunction() {
  let userRadius = convertToNumber(document.getElementById("radius").value);
  let outputElement = document.getElementById("output");
  if (userRadius) {
    let circumfrence = CalculateCircle(userRadius);
    outputElement.innerHTML = `The circumfrence is ${circumfrence}`;
  } else {
    outputElement.innerHTML = "Please enter a valid input";
  }
}
function submitAreaFunction() {
  let userRadius = convertToNumber(
    document.getElementById("radiusForArea").value
  );
  let outputElement = document.getElementById("output");
  if (userRadius) {
    let area = calculateArea(userRadius);
    outputElement.innerHTML = `The area is ${area}`;
  } else {
    outputElement.innerHTML = "Please enter a valid input";
  }
}
