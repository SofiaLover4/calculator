let displayValue = "";

window.addEventListener('keydown', e => {
   if (e.key >= 0 && e.key <= 9) {
      results.textContent += e.key;
   } else if (e.key === "/" || e.key === "-" || e.key === "*" || e.key === "+") {
results.textContent += ` ${e.key} `;
   } else if (e.key === ".") {
      addDecimal();
   } else if (e.key === "Backspace") {
      backSpace();
   } else if (e.key === "=") {
      equals();
   }  
});

const allButtons = document.querySelectorAll('button');
const numPadBtns = document.querySelectorAll('.numpad button');
const operationsBtns = document.querySelectorAll('.operations button'); 
const results = document.querySelector('.results');
const decimalBtn = document.querySelector('.decimal');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.backspace');
const equalBtn = document.querySelector('.equals');

results.textContent = "";

allButtons.forEach(button => {
   button.addEventListener('mouseover', () => {
      button.style.backgroundColor = "rgb(153, 249, 162)";
   });
   button.addEventListener('mouseout', () => {
      button.style.backgroundColor = "";
   });
   button.addEventListener('mousedown', function onMouseDown() {
      button.style.backgroundColor = "rgb(241, 228, 185)";
   });
   button.addEventListener('mouseup', function onMouseUp(){
      button.style.backgroundColor = "rgb(153, 249, 162)";
   });
});

numPadBtns.forEach(button => {
   button.addEventListener('click', e => {
      results.textContent += e.target.innerText;
   });
});

operationsBtns.forEach(button => {
   button.addEventListener('click', e => {
      results.textContent += ` ${e.target.innerText} `;
   });
});

decimalBtn.addEventListener('click', addDecimal);

clearBtn.addEventListener('click', () => {
   results.textContent = "";
});

backBtn.addEventListener('click', backSpace);

equalBtn.addEventListener('click', equals);
//Basic Math Functions

function add (num1,num2) {
   return num1 + num2;
}

function subtract (num1,num2) {
   return num1 - num2;
}

function multiply (num1,num2) {
   return num1 * num2;
};

function divide (num1,num2) {
   return num1 / num2;
};

function getOperator (array) {
   let one = array.find(character => {
      if (character === "*" || character ===  "/") {
         return true;
      }
   });
   let two = array.find(character => {
      if(character === "+" || character === "-") {
         return true;
      }
   });
   return one !== undefined ? one : two;
}

function addDecimal () {
   screen = results.textContent.split(" ");
   lastNum = screen[screen.length - 1];
   array = lastNum.split("");
   lastCharacter = array[array.length - 1];
   if (!Number.isNaN(lastNum) && !Number.isInteger(+lastNum)){
      return;
   } else if (!Number.isNaN(lastNum) && lastCharacter === "."){
      return;
   } else {
      results.textContent += ".";
   }
}

function backSpace () {
   let screen = results.textContent.split("");
   if (screen[screen.length - 1] === " ") {
      screen.splice(screen.length - 3, 3);
      results.textContent = screen.join("");
   } else {
      let last = screen.pop()
      results.textContent = screen.join("");
   }
}

function equals () {
   let screen = results.textContent.split(" ");
   if (screen.length === 1) return results.textContent = screen;
   do {
      let index = screen.indexOf(getOperator(screen));
      let equation = screen.slice(index - 1, index + 2);
      if (equation[2] === "") return results.textContent = "Error";
      let answer = operate(equation);
      if (answer === Infinity) return results.textContent = "Error";
      screen.splice(index - 1, 3, answer);
   } while (screen.length != 1);
   results.textContent = screen;
}

// A function that uses those math functions
function operate (string) {
   const array = string;
   const firstNum = +array[0];
   const secondNum = +array[2];
   switch (array[1]) {
      case "+":
         return add(firstNum,secondNum)
      case "-":
         return subtract(firstNum,secondNum);
      case "*":
         return multiply(firstNum,secondNum);
      case "/":
         return divide(firstNum,secondNum);
   }
}
