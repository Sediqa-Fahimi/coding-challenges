
class HumanPlayer
    attr_reader :mark
    def initialize(mark)
        @mark = mark
    end
    def get_position
        puts "#{@mark} enter a position: eg, '1 2'"
        position = gets.chomp
        if position.length != 3
            raise "not valid entry"
        end   
        position.split(" ").map {|ele| ele.to_i}
    end
end