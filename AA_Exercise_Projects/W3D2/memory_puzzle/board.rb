require_relative "card"

class Board
    attr_accessor :grid
    def initialize(*cards)
        @grid = Array.new(4) {Array.new(4)}
        populate(cards)
    end
    def empty(pos)
        row = pos[0]
        col = pos[1]
        @grid[row][col] == nil
    end
    def populate(cards)
        cards.each do |card|
                row = (0..3).to_a.sample
                col = (0..3).to_a.sample
                while !empty([row,col])
                    row = (0..3).to_a.sample
                    col = (0..3).to_a.sample
                end
                @grid[row][col] = card
        end
    end
    def render
        p "   0   1   2   3"
        @grid.map.with_index do |row,i|
            p "#{i}  #{row.map {|col| col.display_card}.join(" | ")}"
        end
    end
    def won?
        @grid.all? {|row| row.all? {|col| col.face_up}}
    end
    def reveal

    end
end