const gameBoard = document.querySelector('#gameBoard')
const clearBtn = document.querySelector('#btn')
const size = document.querySelector('#pixel-size')
let boardSize = size.value

//make a function to generate boxes. should be nested for loop. 
function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList = 'row'
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div')
            box.className = 'box'
            row.appendChild(box)
        }
        gameBoard.appendChild(row)
    }
}
makeGrid(boardSize)
// make a function to change all box css classes to background black. 
gameBoard.addEventListener('mouseout', function (e) {
    e.target.className === 'box' ? e.target.style.background = 'black' : false
    // console.log(e.target.className)
})
// make a clear function that targets all squares and changes them back to white 
clearBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.style.background = 'none'
    })
})
size.addEventListener('mouseup', function () {
    gameBoard.textContent = ""
    boardSize = size.value
    makeGrid(boardSize)
})