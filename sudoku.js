let puzzle = [...Array(9)].map(e => Array(9)); //array of numbers to be filled

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"] //labels for ROWS of puzzle
const inputs = document.querySelectorAll('.buttons')  
inputs.forEach( function (input) {
    input.addEventListener('input', (e) => {  
        let value = Number(e.target.value)
        if (!numbers.includes(value)) //check if input is a NUMBER
            alert("Please type numbers only.") //if input is not a NUMBER, notify user to type in a number
        //console.log(e.target.id)
        assign(e)  
    });
})

const check = document.getElementById("check")
check.addEventListener('click', (e) => { //events when "check" button is clicked
    if (checkEntry(puzzle))
        alert("RIGHT")
    else   
        alert("WRONG")
})

const generate = document.getElementById("generate")
generate.addEventListener('click', (e) => { //events when "generate" button is clicked
    
})

function assign(N) { //assigns values to a 2x2 array corresponding to the inputted numbers
    let ID = String(N.target.id)
    let coordinate1 = letters.indexOf(ID.substring(0, 1))
    let coordinate2 = Number(ID.substring(1)) - 1
    puzzle[coordinate1][coordinate2] = Number(N.target.value)
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            if (puzzle[i][j] == null)
                puzzle[i][j] = 0
        }
    }
}

function checkEntry(grid) {
    if (isValidAcrossRows(grid) && isValidAcrossColumns(grid)) //check if conditions for valid sudoku solution are fulfilled
        return true
    return false
}

function isValidAcrossRows(grid) { //checks that each number is unique across every row
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let temp = grid[i][j]
            for (let k = j + 1; k < grid[0].length; k++) {
                if (grid[i][k] == temp)
                    return false
            }
        }
    }
    return true
}

function isValidAcrossColumns(grid) { //checks that each number is unique across every column
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let temp = grid[j][i]
            for (let k = j + 1; k < grid[0].length; k++) {
                if (grid[k][i] == temp)
                    return false
            }
        }
    }
    return true
}

