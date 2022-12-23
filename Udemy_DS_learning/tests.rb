# begin
#     input = gets.chomp             # Read input from STDIN
#     #print "Hello #{name}"         # Write output to STDOUT
#     n = input.to_i
#     board = Array.new(n) {Array.new(n)}
#     board.each_with_index do |row,i|
#         row.each_with_index do |col,j|
#             if((j % 2 == 0 && i % 2 == 0) || (i % 2 != 0 && j % 2 != 0))
#                 board[i][j] = "W"
#             else
#                 board[i][j] = "B"
#             end
#         end
#     end
#     board.each {|row| puts row.join(" ")}

# end

# begin
    
#     n = gets.chomp
#     str = gets.chomp
#     array_size = n.to_i
#     values = str.split(" ").map {|ele| ele.to_i}
#     idx = -1
#     (0...array_size).each do |i|
#         if(i == 0 && values[i] != values[i+1])
#             idx = i
#             break
#         elsif(i == array_size-1 && values[-1] != values[-2])
#             idx = array_size-1
#         elsif(values[i-1] != values[i] && values[i] != values[i+1])
#             idx = i 
#             break
#         end
#     end
#     if(idx == -1)
#         p -1
#     else
#         p values[idx]
#     end
# end

begin
    def digit_sum(num)
        nums = num.to_s.split("").map {|n| n.to_i}
        nums.sum
    end

    n1 = gets.chomp
    n2 = gets.chomp

    x = n1.to_i
    y = n2.to_i

    count = 0

    (0..x).each do |num|
        if(digit_sum(num) == y) 
            count += 1
        end
    end

    p count == 0 ? -1 : count
    
end