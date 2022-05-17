let operator;
let newNumber = true;
let result;
let num1;
let num2;

//equations
const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
function divide(num1, num2) {
    if (num2) {
    return num1 / num2;}
    else {
        return "🤷"
    }
}

//calculate
const operate = (operator, num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "plus") {
    result = add(num1, num2);
  } else if (operator === "minus") {
    result = substract(num1, num2);
  } else if (operator === "times") {
    result = multiply(num1, num2);
  } else if (operator === "divided") {
    result = divide(num1, num2);
  }
  
};

//write numbers on display
const numbers = document.querySelectorAll("#number");
const display = document.querySelector("#display");
for (const number of numbers) {
  writeNumbers(number);
}

function writeNumbers(number) {
    number.addEventListener("click", () => {
        if (newNumber) {
            display.textContent = "";
            newNumber = false;
        }
        display.textContent += number.textContent;
        num2 = display.textContent;
    });
}

//assign num1 and operator
const operators = document.getElementsByClassName("operator");
for (const opBtn of operators) {
  opBtn.addEventListener("click", () => {
    calculation(opBtn);
  });
}
function calculation(opBtn) {
    
    if (num1 && num2) {
        operate(operator, num1, num2);
        num1 = result;
        display.textContent = result;
       }
        else {
        num1 = num2;
        }

    operator = opBtn.id;
    num2 = "";
    newNumber = true;
}

//equal operation
const equal = document.getElementById("equal")
equal.addEventListener("click", () => {
    if (num1 && num2) {
        operate(operator, num1, num2);
        num1 = result;
        display.textContent = result;
    }
    else {
        display.textContent = num2;
    }
    

    newNumber = true;

})


//clear display
const ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
  clearDisplay();
});
function clearDisplay() {
    display.textContent = 0;
    newNumber = true;
    num1 = "";
    num2 = "";
    result = "";
    operator = "";
}

