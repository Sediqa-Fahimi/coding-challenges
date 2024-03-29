def select_even_nums(arr)
    arr.select {|num| num.even? }
end

def reject_puppies(arr)
    arr.reject { |dog| dog["age"] <= 2}
end

def count_positive_subarrays(arr)
    arr.count {|subarray| subarray.sum > 0}
end

def aba_translate(word)
    vowels = 'aeiou'
    new_word = ''
    word.each_char do |char|
        if vowels.include?(char)
            new_word = new_word + char + 'b' + char
        else
            new_word += char
        end
    end
    new_word
end

def aba_array(words)
    words.map {|word| aba_translate(word) }
end