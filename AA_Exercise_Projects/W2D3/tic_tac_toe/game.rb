require_relative 'board'
require_relative 'human_player'

class Game
    def initialize(n, *marks)
        @board = Board.new(n)
        @players = marks.map {|mark| HumanPlayer.new(mark)}
        @current_player = @players[0]
    end
    def switch_turn
        if @current_player == @player1
            @current_player = @player2
        else
            @current_player = @player1
        end
    end
    def play
        while @board.empty_positions?
            @board.print
            position = @current_player.get_position
            @board.place_mark(position,@current_player.mark)
            if @board.win?(@current_player.mark)
                @board.print
                puts "victory #{@current_player.mark} won the game."
                return
            else
                switch_turn
            end
        end
        puts "draw, no one win."
    end
end

game = Game.new(:O, :X)
game.play