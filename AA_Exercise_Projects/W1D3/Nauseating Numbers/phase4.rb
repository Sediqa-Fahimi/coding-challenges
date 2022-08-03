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

    
end

# p consecutive_collapse([3, 4, 1])                     # [1]
# p consecutive_collapse([1, 4, 3, 7])                  # [1, 7]
# p consecutive_collapse([9, 8, 2])                     # [2]
# p consecutive_collapse([9, 8, 4, 5, 6])               # [6]
# p consecutive_collapse([1, 9, 8, 6, 4, 5, 7, 9, 2])   # [1, 9, 2]
# p consecutive_collapse([3, 5, 6, 2, 1])               # [1]
# p consecutive_collapse([5, 7, 9, 9])                  # [5, 7, 9, 9]
# p consecutive_collapse([13, 11, 12, 12])              # []