const btn = document.getElementById("btn")
const output = document.getElementById("output")
const randomNumber = Math.floor((Math.random() * 100)+1)
const tableContainer = document.getElementById("table-container")

let numGuess = 0;
let passed = 0;
let count = 0;

window.addEventListener('load', () => {
    
    for (let i = 1; i <= count; i++) {
        
        const tabletd = document.createElement("tr")
        tabletd.innerHTML= `
              <td>${localStorage.getItem(`AlreadyPassed${i}`)}</td>
              <td>${localStorage.getItem(`YourTries${i}`)}</td>
        `
        tableContainer.appendChild(tabletd)
    }
});

numGuess = localStorage.getItem('numGuess') || numGuess;
passed = localStorage.getItem('passed') || passed;
count = localStorage.getItem('count') || count;

function render() {
    
    const tabletd = document.createElement("tr")
    tabletd.innerHTML= `
          <td>${localStorage.getItem(`AlreadyPassed${count}`)}</td>
          <td>${localStorage.getItem(`YourTries${count}`)}</td>
    `
    
    tableContainer.appendChild(tabletd)
    
    numGuess = 0
    
    localStorage.setItem('numGuess', numGuess);
}

function checkGuess() {
    
    const guess = Number(document.getElementById("number").value);
    
    numGuess++

    if(guess === randomNumber){
        output.innerHTML = `
          Congratulations , you guessed it after ${numGuess} times
        `;
        count++
        passed++
        localStorage.setItem('count', count);
        localStorage.setItem('passed', passed);
        localStorage.setItem(`AlreadyPassed${count}`, passed);
        localStorage.setItem(`YourTries${count}`, numGuess);
        
        render()
    
    }else if (guess<randomNumber){
        output.innerHTML= 'your number is too low'
    }else{
        output.innerHTML= 'your number is too high'
    }

    document.getElementById("number").value = ""
    
    localStorage.setItem('numGuess', numGuess);
}

btn.addEventListener("click",checkGuess)
