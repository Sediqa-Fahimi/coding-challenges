def strange_sums(arr)
    count = 0 
    arr.each_with_index do |ele1,i1|
        arr.each_with_index do |ele2,i2|
            if i1 < i2 && ele1 + ele2 == 0
                count += 1
            end
        end
    end
    count
end

# p strange_sums([2, -3, 3, 4, -2])     # 2
# p strange_sums([42, 3, -1, -42])      # 1
# p strange_sums([-5, 5])               # 1
# p strange_sums([19, 6, -3, -20])      # 0
# p strange_sums([9])                   # 0

def pair_product(numbers, product)
    numbers.each_with_index do |num1,i1|
        numbers.each_with_index do |num2,i2|
            if i1 < i2 && num1 * num2 == product
                return true
            end
        end
    end
   false
end

# p pair_product([4, 2, 5, 8], 16)    # true
# p pair_product([8, 1, 9, 3], 8)     # true
# p pair_product([3, 4], 12)          # true
# p pair_product([3, 4, 6, 2, 5], 12) # true
# p pair_product([4, 2, 5, 7], 16)    # false
# p pair_product([8, 4, 9, 3], 8)     # false
# p pair_product([3], 12)             # false

def rampant_repeats(str, hash)
    repeated = ''
    str.each_char do |char|
        if hash[char]
            repeated += (char * hash[char])
        else
            repeated += char
        end
    end
    repeated
end

# p rampant_repeats('taco', {'a'=>3, 'c'=>2})             # 'taaacco'
# p rampant_repeats('feverish', {'e'=>2, 'f'=>4, 's'=>3}) # 'ffffeeveerisssh'
# p rampant_repeats('misispi', {'s'=>2, 'p'=>2})          # 'mississppi'
# p rampant_repeats('faarm', {'e'=>3, 'a'=>2})            # 'faaaarm'

def perfect_square(num)
    (1..num).each do |n|
        if n * n == num
            return true
        end
    end
    false
    # (1..num).any? {|n| n * n == num}
end

p perfect_square(1)     # true
p perfect_square(4)     # true
p perfect_square(64)    # true
p perfect_square(100)   # true
p perfect_square(169)   # true
p perfect_square(2)     # false
p perfect_square(40)    # false
p perfect_square(32)    # false
p perfect_square(50)    # false