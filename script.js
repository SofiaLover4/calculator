let displayValue = "";

const numPadBtns = document.querySelectorAll('.numpad button');
const operationsBtns = document.querySelectorAll('.operations button'); 
const results = document.querySelector('.results');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.backspace');

results.textContent = "";


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

clearBtn.addEventListener('click', () => {
   results.textContent = "";
});

backBtn.addEventListener('click', () =>{
   let screen = results.textContent.split("");
   if (screen[screen.length - 1] === " ") {
      screen.splice(screen.length - 3, 3);
      results.textContent = screen.join("");
   } else {
      screen.pop();
      results.textContent = screen.join("");
   }
})

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

// A function that uses those math functions
function operate (string) {
   const array = string.split(" ");
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
