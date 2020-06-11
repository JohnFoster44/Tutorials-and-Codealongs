const calculator = document.querySelector("#calculator");
const buttons = calculator.querySelector(".buttons");
const operators = calculator.querySelectorAll(".operators");

buttons.addEventListener("click", clicked);

function clicked(e) {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log("number");
    }

    if (
      action === "add" ||
      action === "divide" ||
      action === "multiply" ||
      action === "subtract"
    ) {
      console.log("operator");
    }

    if (action === "equals") {
      console.log("equals");
    }

    if (action === "decimal") {
      console.log("decimal");
    }

    if (action === "clear") {
      console.log("clear");
    }
  }
}
