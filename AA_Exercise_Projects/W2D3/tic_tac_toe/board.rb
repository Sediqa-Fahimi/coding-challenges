

class Board
    attr_reader :grid
    def initialize
        @grid = Array.new(3) {Array.new(3,'_')}

    end
    def valid?(pos)
        row = pos[0]
        col = pos[1]
        if (row >= 0 && row < @grid.length) && (col >= 0 && col < @grid.length)
            true
        else
            false
        end
    end
    def empty?(pos)
        row = pos[0]
        col = pos[1]
        @grid[row][col] == '_'
    end
    def place_mark(pos, mark)
        if self.valid?(pos) && self.empty?(pos)
            @grid[pos[0]][pos[1]] = mark
        else
            raise 'not valid or empty'
        end
    end
    def print
        @grid.each {|row| puts row.join('|')}
    end
    def win_row?(mark)
        @grid.any? {|row| row.all? {|ele| ele == mark}}
    end
    def win_col?(mark)
        @grid.transpose.any? {|row| row.all? {|ele| ele == mark}}
    end
    def win_diagonal?(mark)
        left_right = true
        (0...@grid.length).each do |i|
            if @grid[i][i] != mark
                left_right = false
            end
        end

        right_left = true
        (0...@grid.length).each do |i|
            if @grid[i][@grid.length - 1 - i] != mark
                left_right = false
            end
        end
        left_right || right_left
    end
    def win?(mark)
        self.win_row?(mark) || self.win_col?(mark) || self.win_diagonal?(mark)
    end
    def empty_positions?
        @grid.any? {|row| row.any? {|ele| ele == '_'}}
    end
end