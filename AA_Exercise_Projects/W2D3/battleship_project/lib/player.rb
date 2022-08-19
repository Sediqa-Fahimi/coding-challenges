class Player
    def get_move
        puts 'enter a position with coordinates separated with a space like `4 7`'
        position = gets.chomp.split(" ") #position = ['4','7']
        position.each_with_index {|ele,i| position[i] = ele.to_i}
        position
    end
end
