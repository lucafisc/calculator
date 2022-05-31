let operator;
let newNumber = true;
let result;
let num1 = "";
let num2 = "0";
let input;

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
const percentage = (num2) => num2/100

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
  if (result.toString().length > 11) {
    result = result.toString().slice(0,11)}
};

const percentageBtn = document.getElementById("percentage");
percentageBtn.addEventListener("click", () => {
    num2 = percentage(num2);
    display.textContent = num2;
})

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
        if (number.textContent === "." && display.textContent.includes(".") || display.textContent.length > 10){
            return
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
    console.log("heloo")
    if (num1 && num2) {
        operate(operator, num1, num2);
        num1 = result;
        display.textContent = result;
       }
        else if (!operator){
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
    
    operator = "";
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
    num2 = "0";
    result = "";
    operator = "";
}


//backspace button
const backspace = document.querySelector('#backspace')
backspace.addEventListener('click', () => {
    if (Number(display.textContent)) {
    display.textContent = display.textContent.slice(0,-1);
    }
    else {
        display.textContent = 0;
        newNumber = true;
    }

    if (display.textContent.length <= 0 || display.textContent === "-") {
        display.textContent = 0;
        newNumber = true;
    }
})

//copy to clipboard support
const copy = document.getElementById("copytoclipboard");
copy.addEventListener("click", () => {
    copyResultToClipboard (display.textContent);
})

function copyResultToClipboard (str) {
    const txtarea = document.createElement('textarea');
    txtarea.value = str;
    txtarea.setAttribute('readonly', '');
    txtarea.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(txtarea);
    txtarea.select();
    document.execCommand('copy');
    document.body.removeChild(txtarea);
 }

 //keyboard support

//  window.addEventListener("keypress", (e) => {
//      console.log(e)
//      if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0") {
//         input = e.key;
//      }
//  })


