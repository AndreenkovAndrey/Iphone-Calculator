const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operatorsArray = ["÷", "×", "−", "+"];
const functionalOperatorsArray = ["AC", "±", "%", "="];
const display = document.querySelector(".display");
const buttonsDiv = document.querySelector(".buttons-container");
const ac = document.getElementById("#ac");
let x = "";
let y = "";
let operator = "";
let chainingFinish = false;
let selectedButton;

buttonsDiv.onclick = (event) => {
  const target = event.target;
  const targetValue = event.target.textContent;
  contains(targetValue);
};

function contains(targetValue) {
  if (numbersArray.includes(targetValue)) {
    saveNum(targetValue);
  } else if (operatorsArray.includes(targetValue)) {
    saveOperator(targetValue);
  } else {
    functionalOperators(targetValue);
  }
}

function saveNum(targetValue) {
  if (operator === "") {
    x += targetValue;
    display.textContent = x;
  } else if (x !== "" && y !== "" && chainingFinish == true) {
    y = targetValue;
    chainingFinish = false;
    display.textContent = y;
  } else {
    y += targetValue;
    display.textContent = y;
  }
}

const saveOperator = (targetValue) => {
  operator = targetValue;
};

function functionalOperators(operatorsTarget) {
  switch (operatorsTarget) {
    case "AC":
      clearAll();
      break;

    case "±":
      pmFunction();
      break;

    case "%":
      x = x / 100;
      display.textContent = x;
      break;

    case "=":
      eqOperator(operatorsTarget);
      break;
    default:
      console.log("не работает");
  }
  console.log(x, y, operator);
}

function clearAll() {
  x = "";
  y = "";
  operator = "";
  chainingFinish = false;
  display.textContent = "0";
}

function eqOperator(operatorsEq) {
  if (operatorsEq === "=") {
    switch (operator) {
      case "+":
        x = parseFloat(x) + parseFloat(y);
        break;

      case "−":
        x = parseFloat(x) - parseFloat(y);
        break;

      case "×":
        x = parseFloat(x) * parseFloat(y);
        break;

      case "÷":
        divisionFunc();
        break;

      default:
        console.log("не робит");
    }
    chainingFinish = true;
    display.textContent = x;
  }
}

function divisionFunc() {
  if (y === "0") {
    x = "";
    y = "";
    operator = "";
    chainingFinish = false;
    display.textContent = "Ошибка";
  } else {
    x = x / y;
  }
  console.log(x, y, operator);
}

function pmFunction() {
  if (operator === "") {
    xPmCheck();
  } else {
    yPmCheck();
  }
}

function xPmCheck() {
  if (Math.sign(x) === -1) {
    x = Math.abs(x).toString();
  } else if (Math.sign(x) === 1) {
    x = "-" + Math.abs(x).toString();
  }
  display.textContent = x;
}

function yPmCheck() {
  if (Math.sign(y) === -1) {
    y = Math.abs(y).toString();
  } else if (Math.sign(y) === 1) {
    y = "-" + Math.abs(y).toString();
  }
  display.textContent = y;
}
