
class Player{
    getMove(reader, callback){
        reader.question('enter a position with coordinates separated with a space like `1 2`: ', numbers => {
            const move = numbers.split(' ').map(num => parseInt(num));
            callback(move);
        });
    }

}
module.exports = Player;