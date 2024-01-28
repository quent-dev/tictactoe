const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9], 
    [3, 5, 7]
]

class Game {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.started = false;
        this.gameOver = false;
        this.winner = '';
    }

    reset() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.started = false;
        clearBoard();
    }

    start() {
        game.reset();
        this.started = true;
    }

    // check if the game is over by getting X and O counts
    checkWin() {
        let xCount = this.board.map((x,index) => {return x === 'X' ? index + 1 : ''});
        let oCount = this.board.map((x,index) => {return x === 'X' ? index + 1 : ''});
        for (let i = 0; i < winningCombinations.length; i++) {
            if (winningCombinations[i].every(x => xCount.includes(x))) {
                this.gameOver = true;
                this.winner = 'X wins!';
                break
            } else if (winningCombinations[i].every(x => oCount.includes(x))) {
                this.gameOver = true;
                this.winner = 'O wins!';
                break
            } else {
                this.gameOver = false;
            }
        }
    }
}

const game = new Game();
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const gameStatus = document.getElementById('status');

function updateBoard(domElement, index) {
    if (game.started === false) {
        alert('Game has not started yet!');
    } else {
        domElement.textContent = game.currentPlayer;
        domElement.disabled = true;
        domElement.style.color = game.currentPlayer === 'X' ? 'red' : 'blue';
        game.board[index] = game.currentPlayer;
        game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';
        game.checkWin();
        gameStatus.textContent = game.gameOver? game.winner : `${game.currentPlayer}'s turn`;
    }
    
}

function clearBoard() {
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
}


one.addEventListener('click',() => updateBoard(one, 0));
console.log(game);
two.addEventListener('click',()=> updateBoard(two, 1));
three.addEventListener('click',() => updateBoard(three, 2));
four.addEventListener('click',() => updateBoard(four, 3));
five.addEventListener('click',() => updateBoard(five, 4));
six.addEventListener('click', () => updateBoard(six, 5));
seven.addEventListener('click',() => updateBoard(seven, 6));
eight.addEventListener('click',() => updateBoard(eight, 7));
nine.addEventListener('click',() => updateBoard(nine, 8));
start.addEventListener('click',() => {
    game.start()
    start.innerText = 'Game is on!';
    start.disabled = true;
    start.style.color = 'green';
});
reset.addEventListener('click',() => game.reset());