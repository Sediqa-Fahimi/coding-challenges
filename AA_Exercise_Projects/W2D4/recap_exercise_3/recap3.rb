def no_dupes?(arr)
    elements = Hash.new(0)
    arr.each {|ele| elements[ele] += 1}
    elements.keys.select {|ele| elements[ele] == 1}
end
# p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
# p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
# p no_dupes?([true, true, true])            # => []

def no_consecutive_repeats?(arr)
    (0...arr.length-1).each do |i|
        return false if arr[i] == arr[i+1]
    end
    true
end
# p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
# p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
# p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
# p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
# p no_consecutive_repeats?(['x'])                              # => true

def char_indices(str)
    indices = Hash.new {|h,k| h[k] = []}
    str.each_char.with_index do |char,i|
        indices[char] << i   
    end
    indices
end
# p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
# p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

def longest_streak(str)
    max = 0
    char = ""
    i = 0
    while i < str.length
        count = 1
        j = i + 1
        while j < str.length
            if str[j] == str[j-1]
                count += 1
            else
                break
            end
            j += 1
        end
        if count >= max
            max = count
            char = str[j-1]
        end
        i = j
    end
    char * max
end
# p longest_streak('a')           # => 'a'
# p longest_streak('accccbbb')    # => 'cccc'
# p longest_streak('aaaxyyyyyzz') # => 'yyyyy
# p longest_streak('aaabbb')      # => 'bbb'
# p longest_streak('abc')         # => 'c'

def is_prime?(num)
    return false if num < 2
    (2...num).each do |n|
        return false if num % n == 0
    end
    true
end
def bi_prime?(num)
    (2...num).each do |n|
        return true if is_prime?(n) && is_prime?(num / n) && ((num/n) * n == num)
    end
    false
end
# p bi_prime?(14)   # => true
# p bi_prime?(22)   # => true
# p bi_prime?(25)   # => true
# p bi_prime?(94)   # => true
# p bi_prime?(24)   # => false
# p bi_prime?(64)   # => false

def vigenere_cipher(str, arr)
    keys = stretch_arr(arr, str.length)
    result = ""
    str.each_char.with_index do |char, i|
        result += cipher(char,keys[i])
    end
    result
end
def stretch_arr(arr,len)
    i = 0
    while arr.length < len
        arr << arr[i]
        i += 1
    end
    arr
end
def cipher(char,key)
    alpha = ('a'..'z').to_a
    old_idx = alpha.index(char)
    new_idx = (old_idx + key) % alpha.length
    alpha[new_idx]
end

# p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
# p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
# p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
# p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
# p vigenere_cipher("yawn", [5, 1])             # => "dbbo"

def vowel_rotate(str)
    vowels_list = vowels_count(str)[0]
    vowels_idx = vowels_count(str)[1]
    vowels_idx.each_with_index do |v_idx, i|
        str[v_idx] = vowels_list[i]
    end
    str
end
def vowels_count(str)
    vowels = 'aeiou'
    indices = []
    vowels_list = []
    str.each_char.with_index do |char,i|
        if vowels.include?(char)
            indices << i  
            vowels_list << char 
        end
    end
    vowels_list.unshift(vowels_list.pop)
    return [vowels_list, indices]
end
p vowel_rotate('computer')      # => "cempotur"
p vowel_rotate('oranges')       # => "erongas"
p vowel_rotate('headphones')    # => "heedphanos"
p vowel_rotate('bootcamp')      # => "baotcomp"
p vowel_rotate('awesome')       # => "ewasemo"
