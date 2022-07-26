# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

def largest_prime_factor(num)
    i = num
    while i >= 2
        if num % i == 0 && prime?(i)
            return i  
        end
        i -= 1
    end
end

def prime?(num)
    return false if num < 2

    (2...num).each do |factor|
        return false if num % factor == 0
    end
    true
end

def unique_chars?(str)
    counter = {}

    str.each_char do |char|
        if counter[char]
            return false
        else
            counter[char] = true
        end
    end
    true
end

def dupe_indices(arr)
    dup_indices = {}
    arr.each_with_index do |ele, i|
        if dup_indices[ele]
            dup_indices[ele] << i
        else
            dup_indices[ele] = [i]
        end
    end
    dup_indices.select! {|k,v| v.length >= 2}
end