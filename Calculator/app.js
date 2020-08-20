const calculator = document.querySelector("#calculator");
const buttons = calculator.querySelector(".buttons");
const operator = calculator.querySelectorAll(".operator");

buttons.addEventListener("click", clicked);

function clicked(e) {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // NUMBERS ________________________________________________________________
    if (!action) {
      calculator.dataset.previousKeyType = "number";

      Array.from(key.parentNode.children).forEach((k) =>
        k.classList.remove("depressed")
      );

      if (displayNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }
    // OPERATORS ( +, /, *, -) ________________________________________________
    if (
      action === "add" ||
      action === "divide" ||
      action === "multiply" ||
      action === "subtract"
    ) {
      key.classList.add("depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayNum;
      calculator.dataset.operator = action;
    }

    // EQUALS _________________________________________________________________
    if (action === "equals") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayNum;
      calculator.dataset.previousKeyType = "equals";

      const calculate = (n1, operator, n2) => {
        let result = "";

        if (operator === "add") {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === "subtract") {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === "divide") {
          result = parseFloat(n1) / parseFloat(n2);
        } else if (operator === "multiply") {
          result = parseFloat(n1) * parseFloat(n2);
        }
        return result;
      };
      display.textContent = calculate(firstValue, operator, secondValue);
    }
    // DECIMAL ________________________________________________________________
    if (action === "decimal") {
      calculator.dataset.previousKeyType = "decimal";

      if (!displayNum.includes(".")) {
        display.textContent = displayNum + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
    }
    // AC (CLEAR ALL/ALL CLEAR) _______________________________________________
    if (action === "clear") {
      calculator.dataset.previousKeyType = "clear";
      display.textContent = "0";
    }
  }
}
