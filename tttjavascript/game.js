const Board = require('./board.js');

class Game{
    constructor(size){
        this.board = new Board(size);
        this.currentPlayer = 'X';
    }
    switchTurn(){
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    won(){
        return this.board.won();
    }
    over(){
        return this.board.full();
    }
  
    playMove(pos){
        this.board.place_mark(pos,this.currentPlayer);
    }
    prompMove(reader, callback){
        this.board.print_board();
        console.log(`Current Turn: ${this.currentPlayer}`);

        reader.question('Enter rowIdx: ', rowIdxStr => {
            const rowIdx = parseInt(rowIdxStr);
            reader.question('Enter colIdx: ', colIdxStr => {
                const colIdx = parseInt(colIdxStr);
                callback([rowIdx, colIdx]);
            });
        });
    }
    run(reader, completionCallback){
        this.prompMove(reader, pos => {
            this.playMove(pos);

            if(this.over()){
                this.board.print_board();
                if(this.won()){
                    console.log(this.currentPlayer + 'has won!!!');
                }else{
                    console.log('No winner!');
                }
                completionCallback();
            }else{
                this.switchTurn();
                this.run(reader, completionCallback);
            }
        })
    }
}

module.exports = Game;