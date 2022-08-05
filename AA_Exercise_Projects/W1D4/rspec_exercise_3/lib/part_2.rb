def element_count(arr)
    counts = Hash.new(0)
    arr.each {|ele| counts[ele] += 1}
    counts
end

def char_replace!(str, hash)
    str.each_char.with_index do |char, i|
        if hash[char]
            str[i] = hash[char]
        end 
    end
    str 
end

def product_inject(numbers)
    numbers.inject {|accu, num| accu * num}
end