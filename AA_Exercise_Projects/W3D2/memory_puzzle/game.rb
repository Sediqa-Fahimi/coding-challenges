require_relative "board"
require_relative "card"

class Game
    CARDS = [
        Card.new('L'),
        Card.new('M'),
        Card.new('N'),
        Card.new('O'),
        Card.new('P'),
        Card.new('Q'),
        Card.new('R'),
        Card.new('S'),
        Card.new('L'),
        Card.new('M'),
        Card.new('N'),
        Card.new('O'),
        Card.new('P'),
        Card.new('Q'),
        Card.new('R'),
        Card.new('S')
    ]
    def initialize()
        @board = Board.new(CARDS)
        @prev_guess = nil
    end
    def make_guess(pos)
        if !@prev_guess
            @prev_guess = @board.reveal(pos)
        else
            if @board[pos].value == @prev_guess.value
                @board.reveal(pos)
                @prev_guess.reveal
                @prev_guess = nil
            else
                @board.reveal(pos)
                sleep(2)
                @board[pos].hide
                @prev_guess.hide
                @prev_guess = nil
            end
        end
    end
    def over?
        @board.won?
    end
    def play
        until over?
            system("clear")
            @board.render
            print "Enter a pos in this format '1,2': "
            pos = gets.chomp.split(',').map {|s| s.to_i}
            make_guess(pos)
        end
        print "You won!!!"
    end
end