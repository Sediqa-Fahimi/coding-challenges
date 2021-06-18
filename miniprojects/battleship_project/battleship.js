const Board = require('./board');
const Player = require('./player');

class Battleship{
    constructor(n){
        this.player = new Player();
        this.board = new Board(n);
        this.remainingMisses = Math.floor((n * n) / 2);
    }

    startGame(){
        this.board.placeRandomShips();
        const numShips = this.board.numShips();
        console.log(`There are currently ${numShips} hidden ships.`);
        this.board.print();
    }
    lose(){
        if(this.remainingMisses <= 0){
            console.log('you lose');
            return true;
        }else{
            return false;
        }
    }
    win(){
        if(this.board.numShips() === 0){
            console.log('you win.');
            return true;
        }else{
            return false;
        }
    }
    gameOver(){
        return this.lose() || this.win();
    }
    turn(reader){
        if(this.gameOver()){
            reader.close();
        }else{
            this.player.getMove(reader, pos => {
                if(!this.board.attack(pos)){
                    this.remainingMisses--;
                }
                this.board.print();
                console.log(this.remainingMisses);
                this.turn(reader);
            })
        }
    }
}

module.exports = Battleship;