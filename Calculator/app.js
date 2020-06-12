const calculator = document.querySelector("#calculator");
const buttons = calculator.querySelector(".buttons");
const operators = calculator.querySelectorAll(".operators");

buttons.addEventListener("click", clicked);

function clicked(e) {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNum = display.textContent;

    if (!action) {

      Array.from(key.parentNode.children).forEach(k => k.classList.remove('depressed'));

      if (displayNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "divide" ||
      action === "multiply" ||
      action === "subtract"
    ) {
      key.classList.add('depressed')
    }

    if (action === "equals") {
      console.log("equals");
    }

    if (action === "decimal") {
      console.log("decimal");
      display.textContent = displayNum + '.';
    }

    if (action === "clear") {
      console.log("clear");
      display.textContent = '0';
    }

    
  }
}
