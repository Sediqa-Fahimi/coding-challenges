# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

# def coprime?(num1, num2) # O(n) time | O(n) space
#     if num1 < num2
#         smaller = num1
#         bigger = num2
#     else
#         smaller = num2
#         bigger = num1
#     end
#     smaller_num_factors = factors(smaller) # O(n)
#     smaller_num_factors.each do |num|      # O(n)
#         if num != 1 && bigger % num == 0
#             return false
#         end
#     end
#     return true
# end
# def factors(number)
#    return (1..number).select { |num| number % num == 0} # O(n) 
# end

# def coprime?(num1, num2) # O(n) time | O(n) space using Hash
#     if num1 < num2
#         smaller = num1
#         bigger = num2
#     else
#         smaller = num2
#         bigger = num1
#     end

#     smaller_num_factors = factors(smaller) 
#     smaller_num_factors.each_key do |key|     
#         if key != 1 && bigger % key == 0
#             return false
#         end
#     end
#     return true
# end
# def factors(number)  # O(n) time | O(n) space
#    num_factors = {}
#     (1..number).each do |num|
#         if !num_factors[num] && number % num == 0
#             num_factors[num] = true
#             num_factors[number/num] = true
#         elsif num_factors[num]
#             break
#         end
#     end
#    return num_factors
# end

# def coprime?(num1, num2) # O(n) time | O(n) space where n is the smaller number.
#     if num1 < num2
#         smaller = num1
#         bigger = num2
#     else
#         smaller = num2
#         bigger = num1
#     end

#     (2..smaller).each do |num|     
#         if bigger % num == 0 && smaller % num == 0
#             return false
#         end
#     end
#     return true
# end

def coprime?(num1, num2)
    (2..num1).none? { |divisor| num1 % divisor == 0 && num2 % divisor == 0}
end

# 12=[1,2,3,4,6,12]
# 25=[1,5,25]
p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false
