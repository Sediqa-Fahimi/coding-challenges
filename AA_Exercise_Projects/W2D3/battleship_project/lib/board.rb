class Board
    attr_reader :size
  def initialize(n)
    @grid = Array.new(n) {Array.new(n,:N)}
    @size = n * n
  end
  def [](position) #position eg. [0,1]
    row = position[0]
    col = position[1]
    @grid[row][col]
  end
  def []=(position,val)
    row = position[0]
    col = position[1]
    @grid[row][col] = val
  end
  def num_ships
    count = 0
    @grid.each_with_index do |row,i|
        row.each_with_index do |col,j|
            count += 1 if @grid[i][j] == :S
        end
    end
    count
  end
  def attack(pos)
    if self[pos] == :S 
        self[pos] = :H
        puts 'you sunk my battleship!'
        return true
    else
        self[pos] = :X
        return false
    end
  end
  def place_random_ships
    n_ships = (@size * 25) / 100
    while self.num_ships < n_ships
        row = rand(0..@grid.length - 1)
        col = rand(0..@grid.length - 1)
        self[[row,col]] = :S
    end
  end
  def hidden_ships_grid
    @grid.map do |subarray|
        subarray.map do |ele|
            if ele == :S
                :N
            else
                ele
            end
        end
    end
  end
  def self.print_grid(grid)
    grid.each {|sub| puts sub.join(" ")}
  end
  def cheat
    Board.print_grid(@grid)
  end
  def print
    Board.print_grid(hidden_ships_grid)
  end
end
