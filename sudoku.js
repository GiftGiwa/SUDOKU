let puzzle = [...Array(9)].map(e => Array(9)); //array of numbers to be filled
//console.log(puzzle)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
const inputs = document.querySelectorAll('.buttons')  
inputs.forEach( function (input) {
    input.addEventListener('input', (e) => {  
        let value = Number(e.target.value)
        if (!numbers.includes(value)) //check if input is a NUMBER
            alert("Please type numbers only.")
        //console.log(e.target.id)
        assign(e)  
    });
})

function assign(N) {
    let ID = String(N.target.id)
    let coordinate1 = letters.indexOf(ID.substring(0, 1))
    let coordinate2 = Number(ID.substring(1)) - 1
    //console.log(coordinate1, coordinate2)
    puzzle[coordinate1][coordinate2] = Number(N.target.value)
    
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[0].length; j++) {
            if (puzzle[i][j] == null)
                puzzle[i][j] = 0
        }
    }
    console.log(puzzle)
}

