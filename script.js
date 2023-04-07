let calculationOperator = "";
let prevNumber = "";
let currentNumber = "0";



// screen calculator
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number  
    } else {
        currentNumber += number
    }
}


// tombol number
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
 
// tombol operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

// tombol decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

// tombol percent
const percent = document.querySelector(".percentage");

percent.addEventListener("click", (event)=>{
    inputOperator(event.target.value)
})

// calculate

const calculate = () => {
    let result = ''
    switch (calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(prevNumber)/100 * parseFloat(currentNumber)
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}

// tombol samadengan

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// AC

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

