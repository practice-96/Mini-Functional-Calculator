let warning = "Insert valid numbers in both fields";

const purchaseAmount = document.getElementById("purchaseAmount");
const percentageAmount = document.getElementById("percentageAmount");
let calculateBtn = document.getElementById("calculateBtn");
let resultField = document.getElementById("resultField");
let theCalculation;

calculateBtn.onclick = function () {
  let purchaseValue = +purchaseAmount.value;
  let percentageValue = +percentageAmount.value;
  theCalculation = purchaseValue - ((percentageValue / 100) * purchaseValue);
  resultField.textContent = theCalculation;
  console.log(theCalculation);
};

//! basic calc

//! ADDITION CALCULATOR
const addFirstNumber = document.getElementById("addFirstNumber");
const addSecondNumber = document.getElementById("addSecondNumber");
let additionResult = document.getElementById("additionResult");
let additionCalc = document.getElementById("additionCalc");
let addCalculation;


additionCalc.onclick = function () {
  let addFirstValue = Number(addFirstNumber.value);
  let addSecondValue = Number(addSecondNumber.value);

  if (isNaN(addFirstValue) || isNaN(addSecondValue) || addFirstNumber.value === "" || addSecondNumber.value === "") {
    additionResult.textContent = warning;
  }
  else {
    addCalculation = addFirstValue + addSecondValue;
    additionResult.textContent = addCalculation;
  };
};

//! SUBTRACTION CALCULATOR
const subFirstNumber = document.getElementById("subFirstNumber");
const subSecondNumber = document.getElementById("subSecondNumber");
let subtractionResult = document.getElementById("subtractionResult");
let subtractionCalc = document.getElementById("subtractionCalc");
let subCalculation;
let subFirstValue;
let subSecondVAlue;



subtractionCalc.onclick = function () {
  subFirstValue = Number(subFirstNumber.value);
  subSecondVAlue = Number(subSecondNumber.value);

  if (isNaN(subFirstValue) || isNaN(subSecondVAlue) || subFirstNumber.value === "" || subSecondNumber.value === "") {
    subtractionResult.textContent = warning;
  }
  else {
    subCalculation = subFirstValue - subSecondVAlue;
    subtractionResult.textContent = subCalculation;
  };
};

//! MULTIPLICATION CALCULATOR
const multiFirstNumber = document.getElementById("multiFirstNumber");
const multiSecondNumber = document.getElementById("multiSecondNumber");
let multiplicationResult = document.getElementById("multiplicationResult");
let multiplicationCalc = document.getElementById("multiplicationCalc");

let multiCalculation;

let multiFirstValue;
let multiSecondValue;


multiplicationCalc.onclick = function () {
  multiFirstValue = Number(multiFirstNumber.value);
  multiSecondValue = Number(multiSecondNumber.value);

  if (isNaN(multiFirstValue) || isNaN(multiSecondValue) || multiFirstNumber.value === "" || multiSecondNumber.value === "") {
    multiplicationResult.textContent = warning;
  }
  else {
    multiCalculation = multiFirstValue * multiSecondValue;
    multiplicationResult.textContent = multiCalculation;
  };
};

//! DIVISION CALCULATOR
const divideFirstNumber = document.getElementById("divideFirstNumber");
const divideSecondNumber = document.getElementById("divideSecondNumber");
let divisionResult = document.getElementById("divisionResult");
let divisionCalc = document.getElementById("divisionCalc");
let divideCalculation;


divisionCalc.onclick = function () {
  let divideFirstValue = Number(divideFirstNumber.value);
  let divideSecondValue = Number(divideSecondNumber.value);

  if (isNaN(divideFirstValue) || isNaN(divideSecondValue) || divideFirstNumber.value === "" || divideSecondNumber.value === "") {
    divisionResult.textContent = warning;
  }
  else if (divideSecondValue === 0) {
    divisionResult.textContent = "Division by zero is not allowed.";
  }
  else {
    divideCalculation = divideFirstValue / divideSecondValue;
    divisionResult.textContent = divideCalculation;
  };
};

let resetAllValue = document.getElementById("resetAllValue");

resetAllValue.onclick = function () {
  purchaseAmount.value = '';
  percentageAmount.value = '';
  addFirstNumber.value = '';
  addSecondNumber.value = '';
  subFirstNumber.value = '';
  subSecondNumber.value = '';
  multiFirstNumber.value = '';
  multiSecondNumber.value = '';
  divideFirstNumber.value = '';
  divideSecondNumber.value = '';
  resultField.value = '';
  additionResult.value = '';
  subtractionResult.value = '';
  multiplicationResult.value = '';
  divisionResult.value = '';
};
