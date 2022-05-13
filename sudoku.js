let puzzle = [...Array(9)].map(e => Array(9)); //array of numbers to be filled as values are typed in

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"] //part of labels for ROWS of puzzle

const inputs = document.querySelectorAll('.buttons')  
inputs.forEach( function (input) {
    input.addEventListener('input', (e) => {  
        let value = Number(e.target.value)
        inputAssign(e)  
    });
})

let test_puzzles = []
test_puzzles.push("[004300209005009001070060043006002087190007400050083000600000105003508690042910300]")
//numbers.push(040100050107003960520008000000000017000906800803050620090060543600080700250097100)
//numbers.push(600120384008459072000006005000264030070080006940003000310000050089700000502000190)
//numbers.push(497200000100400005000016098620300040300900000001072600002005870000600004530097061)

test_puzzles[0] = test_puzzles[0].substring(1, test_puzzles[0].length - 2)

initialize() //when the "generate" button is pressed, this function is called

//initialize(Math.random(0, *number of puzzles in file*))

//ADDING UNSOLVED SUDOKU TO PAGE
function initialize() {
    let count = 0
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            let num = Number(test_puzzles[0/**/].charAt(count))
            if (num != 0)  {
                document.getElementById(letters[i] + (j + 1)).value = num
                document.getElementById(letters[i] + (j + 1)).disabled = true
                document.getElementById(letters[i] + (j + 1)).classList.remove("has_hover")
                puzzleAssign(document.getElementById(letters[i] + (j + 1)))
            }
            count++
        }
    }
}

function inputAssign(N) { //assigns values to a 2x2 array corresponding to the numbers inputted by user
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

function puzzleAssign(N) {
    let coordinate1 = letters.indexOf(N.id.substring(0, 1))
    let coordinate2 = Number(N.id.substring(1)) - 1
    puzzle[coordinate1][coordinate2] = Number(N.value)
}

//CHECK BUTTON

document.getElementById("check").addEventListener('click', (e) => { //events when "check" button is clicked
    if (checkEntry(puzzle))
        alert("RIGHT") // to be updated
    else   
        alert("WRONG") // to be updated
})

//GENERATE BUTTON

document.getElementById("generate").addEventListener('click', (e) => { //events when "generate" button is clicked
    alert("test") // to be updated
})

//CHECKING ENTRIES

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

function checkEntry(grid) {
    return (isValidAcrossRows(grid) && isValidAcrossColumns(grid)) //check if conditions for valid sudoku solution are fulfilled
}