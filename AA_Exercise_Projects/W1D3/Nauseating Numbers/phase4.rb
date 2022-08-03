require 'byebug'

def prime?(num)
    return false if num < 2
    (2...num).each do |n|
        return false if num % n == 0
    end
    true
end
def mersenne_prime(n)
    mersenne_primes = []
    i = 2
    while mersenne_primes.length < n
        potential_prime = (2 ** i) - 1
        if prime?(potential_prime)
            mersenne_primes << potential_prime
        end
        i += 1
    end
    mersenne_primes[n-1]
end

# p mersenne_prime(1) # 3
# p mersenne_prime(2) # 7
# p mersenne_prime(3) # 31
# p mersenne_prime(4) # 127
# p mersenne_prime(6) # 131071

def word_encoding(word)
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    sum = 0
    word.each_char do |char|
        position = alpha.index(char) + 1
        sum += position
    end
    sum
end
def triangular_number?(num)
    potential_num = 0
    i = 1
    while potential_num < num
        potential_num = (i * (i+1)) / 2
        return true if potential_num == num
        i += 1
    end
    false
end
def triangular_word?(word)
    encoding = word_encoding(word)
    triangular_number?(encoding)
end

# p triangular_word?('abc')       # true
# p triangular_word?('ba')        # true
# p triangular_word?('lovely')    # true
# p triangular_word?('question')  # true
# p triangular_word?('aa')        # false
# p triangular_word?('cd')        # false
# p triangular_word?('cat')       # false
# p triangular_word?('sink')      # false

def consecutive_collapse(arr)
    collapsed = false
    while !collapsed
        collapsed = true
        (0...arr.length-1).each do |i|
            diff = arr[i] - arr[i+1]
            if diff == 1 || diff == -1
                arr.delete_at(i)
                arr.delete_at(i)
                collapsed = false
                break
            end
        end
    end
    arr
end

# p consecutive_collapse([3, 4, 1])                     # [1]
# p consecutive_collapse([1, 4, 3, 7])                  # [1, 7]
# p consecutive_collapse([9, 8, 2])                     # [2]
# p consecutive_collapse([9, 8, 4, 5, 6])               # [6]
# p consecutive_collapse([1, 9, 8, 6, 4, 5, 7, 9, 2])   # [1, 9, 2]
# p consecutive_collapse([3, 5, 6, 2, 1])               # [1]
# p consecutive_collapse([5, 7, 9, 9])                  # [5, 7, 9, 9]
# p consecutive_collapse([13, 11, 12, 12])              # []

def nearest_prime(num, n)
    nearest_prime = nil
    count = 0
    if n > 0
        i = num + 1
        while count < n 
            if prime?(i)
                count += 1
                nearest_prime = i 
            end
            i += 1
        end
    elsif n < 0
        i = num - 1
        while count < -(n) && i >= 2
            if prime?(i)
                count += 1
                nearest_prime = i if count == -(n)
            end
            i -= 1
        end
    end
    nearest_prime
end
def pretentious_primes(arr, n)
    arr.each_with_index do |ele, i|
        new_ele = nearest_prime(ele, n)
        arr[i] = new_ele
    end
    arr
end

p pretentious_primes([4, 15, 7], 1)           # [5, 17, 11]
p pretentious_primes([4, 15, 7], 2)           # [7, 19, 13]
p pretentious_primes([12, 11, 14, 15, 7], 1)  # [13, 13, 17, 17, 11]
p pretentious_primes([12, 11, 14, 15, 7], 3)  # [19, 19, 23, 23, 17]
p pretentious_primes([4, 15, 7], -1)          # [3, 13, 5]
p pretentious_primes([4, 15, 7], -2)          # [2, 11, 3]
p pretentious_primes([2, 11, 21], -1)         # [nil, 7, 19]
p pretentious_primes([32, 5, 11], -3)         # [23, nil, 3]
p pretentious_primes([32, 5, 11], -4)         # [19, nil, 2]
p pretentious_primes([32, 5, 11], -5)         # [17, nil, nil]