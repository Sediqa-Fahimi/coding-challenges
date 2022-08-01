require "byebug"
def matrix_addition(matrix1, matrix2)
    new_matrix = Array.new(matrix1.length) {Array.new(matrix1[0].length)}
    matrix1.each_with_index do |sub_array, i|
        sub_array.each_with_index do |num, j|
            new_matrix[i][j] = matrix1[i][j] + matrix2[i][j]
        end
    end 
    new_matrix
end
def matrix_addition_reloaded(*matrices)
    matrix = matrices.first
    height = matrix.length
    width = matrix[0].length

    empty_matrix = Array.new(height) {[0] * width}

    matrices.inject(empty_matrix) do |m1,m2|
        return nil if m2.length != height || m2[0].length != width
        matrix_addition(m1,m2)
    end
end
# def matrix_addition_reloaded(*matrices)
#     height = matrices[0].length
#     width = matrices[0][0].length
#     matrices.each do |matrix|
#         if matrix.length != height || matrix[0].length != width
#             return nil
#         end
#     end

#     addition = Array.new(height) {[0] * width}
    
    
#     matrices[0].each_with_index do |row, i|
        
#         row.each_with_index do |col, j|
#             sum = 0
#             matrices.each do |matrix|
#                 sum += matrix[i][j]
#             end
#             addition[i][j] = sum
#         end
#     end
    
#     addition
# end

matrix_a = [[2,5], [4,7]]
matrix_b = [[9,1], [3,0]]
matrix_c = [[-1,0], [0,-1]]
matrix_d = [[2, -5], [7, 10], [0, 1]]
matrix_e = [[0 , 0], [12, 4], [6,  3]]

# p matrix_addition_reloaded(matrix_a, matrix_b)              # [[11, 6], [7, 7]]
# p matrix_addition_reloaded(matrix_a, matrix_b, matrix_c)    # [[10, 6], [7, 6]]
# p matrix_addition_reloaded(matrix_e)                        # [[0, 0], [12, 4], [6, 3]]
# p matrix_addition_reloaded(matrix_d, matrix_e)              # [[2, -5], [19, 14], [6, 4]]
# p matrix_addition_reloaded(matrix_a, matrix_b, matrix_e)    # nil
# p matrix_addition_reloaded(matrix_d, matrix_e, matrix_c)    # nil

def squarocol?(matrix)
    row_all_same = matrix.any? {|row| row.all? {|ele| ele == row[0]}}
    col_all_same = matrix.transpose.any? {|line| line.all? {|item| item == line[0]}}

    row_all_same || col_all_same
end

# p squarocol?([
#     [:a, :x , :d],
#     [:b, :x , :e],
#     [:c, :x , :f],
# ]) # true

# p squarocol?([
#     [:x, :y, :x],
#     [:x, :z, :x],
#     [:o, :o, :o],
# ]) # true

# p squarocol?([
#     [:o, :x , :o],
#     [:x, :o , :x],
#     [:o, :x , :o],
# ]) # false

# p squarocol?([
#     [1, 2, 2, 7],
#     [1, 6, 6, 7],
#     [0, 5, 2, 7],
#     [4, 2, 9, 7],
# ]) # true

# p squarocol?([
#     [1, 2, 2, 7],
#     [1, 6, 6, 0],
#     [0, 5, 2, 7],
#     [4, 2, 9, 7],
# ]) # false

def squaragonal?(matrix)
    left_right = true
    right_left = true
    len = matrix.length
    (0...len).each do |i|
        if matrix[i][i] != matrix[0][0]
            left_right = false
            break
        else
            left_right = true
        end
    end
    (0...len).each do |i|
        if matrix[i][len-i-1] != matrix[0][len-1]
            right_left = false
            break
        else
            right_left = true
        end
    end

    left_right || right_left
end

# p squaragonal?([
#     [:x, :y, :o],
#     [:x, :x, :x],
#     [:o, :o, :x],
# ]) # true

# p squaragonal?([
#     [:x, :y, :o],
#     [:x, :o, :x],
#     [:o, :o, :x],
# ]) # true

# p squaragonal?([
#     [1, 2, 2, 7],
#     [1, 1, 6, 7],
#     [0, 5, 1, 7],
#     [4, 2, 9, 1],
# ]) # true

# p squaragonal?([
#     [1, 2, 2, 5],
#     [1, 6, 5, 0],
#     [0, 2, 2, 7],
#     [5, 2, 9, 7],
# ]) # false

def pascals_triangle(num)
    pas_triangle = [[1]]
    while pas_triangle.length <= num
        last_arr = pas_triangle[-1]
        new_arr = [1]
        i = 0 
        while i < last_arr.length
            if i == 0 && i == last_arr.length - 1
                new_arr << 1
            elsif i == 0 
            i += 1
        end
        pas_triangle << new_arr
    end
    pas_triangle
end

# p pascals_triangle(5)
# # [
# #     [1],
# #     [1, 1],
# #     [1, 2, 1],
# #     [1, 3, 3, 1],
# #     [1, 4, 6, 4, 1]
# # ]

# p pascals_triangle(7)
# # [
# #     [1],
# #     [1, 1],
# #     [1, 2, 1],
# #     [1, 3, 3, 1],
# #     [1, 4, 6, 4, 1],
# #     [1, 5, 10, 10, 5, 1],
# #     [1, 6, 15, 20, 15, 6, 1]
# # ]