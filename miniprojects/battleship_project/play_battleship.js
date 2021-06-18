const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Battleship = require('./battleship');

reader.question('please enter a size for the board: ', size => {
    const game = new Battleship(parseInt(size));
    game.startGame();
    
    game.turn(reader);
  
})