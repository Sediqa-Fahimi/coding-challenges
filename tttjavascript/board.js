class Board{
    constructor(size){
        this.size = size;
        this.board = Array(size);
        for(let i = 0; i < this.board.length; i++){
            this.board[i] = Array(size).fill(null);
        }
    }
    print_board(){
        this.board.forEach(subArr => console.log(subArr));
    }
    won(){
        if(this.winner()) return true;
        return false;
    }
    winner(){
        return this.horizontally() || this.vertically() || this.diagonally();
    }
    full(){
        if(this.winner()) return true;
        return this.board.every(subArr => subArr.every(el => el !== null));
    }
    empty(pos){
        return this.board[pos[0]][pos[1]] === null;
    }
    place_mark(pos, mark){
        if(!this.empty(pos)) return false;
        this.board[pos[0]][pos[1]] = mark;
        return true; 
    }
    horizontally(){
        return this.board.some(subArr => subArr.every(el => el === 'X') || subArr.every(el => el === 'O'));
    }
    vertically(){
        const transposed = function(board){
            const transposed = [];
            for(let i = 0; i < board.length; i++){
                transposed.push([]);
            }

            for(let i = 0; i < board.length; i++){
                for(let j = 0; j < board.length; j++){
                    transposed[i][j] = board[j][i];
                }
            }
            return transposed;
        }
       
        return transposed(this.board).some(subArr => subArr.every(el => el === 'X') || subArr.every(el => el === 'O'));
    }
    diagonally(){
        const board = this.board;
        const leftToRight = function(){
            if(!board[0][0]) return false;
            for(let i = 0; i < board.length; i++){
                if(board[i][i] !== board[0][0]) return false;
            }
            return true;
        }
        const rightToLeft = function(){
            if(!board[0][board.length-1]) return false;
            for(let i = 0; i < board.length; i++){
                if(board[i][board.length-1-i] !== board[0][board.length-1]) return false;
            }
            return true;
        }
        return leftToRight() || rightToLeft();
    }
}

module.exports = Board;

