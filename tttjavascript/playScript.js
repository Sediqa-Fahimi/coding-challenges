const Game = require('./game.js');
const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('enter your board size 3, 4, etc...:', (size)=>{
    let game = new Game(parseInt(size));
    game.run(reader, completion);
   
    function completion(){
        reader.question('Play again? y or n: ', answer => {
            if(answer === 'y'){
                game = new Game(parseInt(size));
                game.run(reader, completion);
            }else{
                reader.close();
            }
        });
    }
    
})



