def partition(arr, num)
    smallers = []
    large_equals = []
    arr.each do |ele|
        if ele < num
            smallers << ele
        else
            large_equals << ele
        end
    end
    [smallers, large_equals]
end

def merge(hash1, hash2)
    merged = {}
    hash1.each do |k,v|
        merged[k] = v
    end
    hash2.each do |k,v|
        merged[k] = v
    end

    merged
end

def censor(sent, arr)
    sent.split(" ").map do |word|
        if arr.include?(word.downcase)
            replace_vowels(word)
        else
            word
        end
    end.join(" ")
end
def replace_vowels(word)
    vowels = 'aeiouAEIOU'
    replaced = ''
    word.each_char do |char|
        if vowels.include?(char)
            replaced += '*'
        else
            replaced += char
        end
    end
    replaced
end

def power_of_two?(num)

    while num > 1
        if num % 2 == 0
            num = num / 2
        else
            return false
        end
    end
    true
end