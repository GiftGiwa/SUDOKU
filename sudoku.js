import { puzzle_arr } from "./puzzles.js"

let puzzle = [...Array(9)].map(e => Array(9)); //array of numbers to be filled as values are typed in

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"] 
/* ^part of labels for ROWS of puzzle; the index of each letter would be the index of the
 * row each number would be located in
*/

let a = parseInt(Math.random() * puzzle_arr.length) // index of randomly selected puzzle

initialize(a) //when the "generate" button is pressed, this function is called

//ADDING UNSOLVED SUDOKU TO PAGE
function initialize(n) {
    let count = 0
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            let num = Number(puzzle_arr[n].charAt(count))
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

function presetTest() { //test CHECK button with completed puzzle
    let count = 0
    test = "[864371259325849761971265843436192587198657432257483916689734125713528694542916378]"
    test = test.substring(1, test.length - 2)
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            let num = Number(test.charAt(count))
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

//presetTest() // <-- runs the above function

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
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            document.getElementById(letters[i] + (j + 1)).value = ""
            document.getElementById(letters[i] + (j + 1)).disabled = false
            document.getElementById(letters[i] + (j + 1)).classList.add("has_hover")
        }
    } 
    let n = parseInt(Math.random() * puzzle_arr.length)
    initialize(n) // to be updated
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