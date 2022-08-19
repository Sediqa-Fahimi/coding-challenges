require 'byebug'
class Board
    attr_reader :grid
    def initialize(n)
        @grid = Array.new(n) {Array.new(n,'_')}
    end
    def valid?(pos)
        row = pos[0]
        col = pos[1]
        if (row >= 0 && row < @grid.length) && (col >= 0 && col < @grid.length)
            return true
        else
            return false
        end
    end
    def empty?(pos)
        row = pos[0]
        col = pos[1]
        @grid[row][col] == '_'
    end
    def place_mark(pos, mark)
        if valid?(pos) && empty?(pos)
            @grid[pos[0]][pos[1]] = mark
        else
            raise "not valid or empty"
        end
    end
    def print
        @grid.each {|row| puts row.join(' | ')}
    end
    def win_row?(mark)
        @grid.any? {|row| row.all? {|ele| ele == mark}}
    end
    def win_col?(mark)
        @grid.transpose.any? {|row| row.all? {|ele| ele == mark}}
    end
    def win_diagonal?(mark)
        left_right = (0...@grid.length).all? {|i| @grid[i][i] == mark}

        right_left = (0...@grid.length).all? {|i| @grid[i][@grid.length - 1 - i] == mark}

        left_right || right_left
    end
    def win?(mark)
        win_row?(mark) || win_col?(mark) || win_diagonal?(mark)
    end
    def empty_positions?
        @grid.any? {|row| row.any? {|ele| ele == '_'}}
    end
end

