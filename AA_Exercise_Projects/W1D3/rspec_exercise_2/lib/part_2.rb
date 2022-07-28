def palindrome?(str)
    first = 0
    last = str.length - 1
    while first < last
        if str[first] == str[last]
            first += 1
            last -= 1
        else
            return false
        end
    end
    true
end

def substrings(str)
    substrs =[]
    i = 0
    while i < str.length
        j = 0
        while j < str.length
            if i <= j
                substrs << str[i..j]
            end
            j += 1
        end
        i += 1
    end
    substrs 
end

def palindrome_substrings(str)
    palind_substrs = []
    substr_arr = substrings(str)
    substr_arr.each do |substr|
        if substr.length > 1 && palindrome?(substr)
            palind_substrs << substr
        end
    end
    palind_substrs
end 