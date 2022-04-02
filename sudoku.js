let puzzle = [...Array(9)].map(e => Array(9)); //array of numbers to be filled as values are typed im

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
//let test_puzzles = []
/*test_puzzles.push( [[8,3,5,4,1,6,9,2,7],
                    [2,9,6,8,5,7,4,3,1],
                    [4,1,7,2,9,3,6,5,8],
                    [5,6,9,1,3,4,7,8,2],
                    [1,2,3,6,7,8,5,4,9],
                    [7,4,8,5,2,9,1,6,3],
                    [6,5,2,7,8,1,3,9,4],
                    [9,8,1,3,4,5,2,7,6],
                    [3,7,4,9,6,2,8,1,5]] )*/

let test_puzzles = []
test_puzzles.push("[004300209005009001070060043006002087190007400050083000600000105003508690042910300]")
//numbers.push(040100050107003960520008000000000017000906800803050620090060543600080700250097100)
//numbers.push(600120384008459072000006005000264030070080006940003000310000050089700000502000190)
//numbers.push(497200000100400005000016098620300040300900000001072600002005870000600004530097061)
test_puzzles[0] = test_puzzles[0].substring(1, test_puzzles[0].length - 2)
console.log(test_puzzles[0])
let test_array = [...Array(9)].map(e => Array(9)) //testing assigning unsolved numbers to 2x2 array from excel sheet

//document.getElementById("cantidadCopias").disabled = true; //<-- that's for later

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

