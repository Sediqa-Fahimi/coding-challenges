##############    Phase1    ##############

def duos(str)
    count = 0
    i = 0
    while i < str.length - 1
        count += 1 if str[i] == str[i+1]
        i += 1  
    end
    count
end

# p duos('bootcamp')      # 1
# p duos('wxxyzz')        # 2
# p duos('hoooraay')      # 3
# p duos('dinosaurs')     # 0
# p duos('e')             # 0

def sentence_swap(sent, hash)
    sent.split(" ").map do |word|
        hash[word] ? hash[word] : word 
    end.join(" ")
end

# p sentence_swap('anything you can do I can do',
#     'anything'=>'nothing', 'do'=>'drink', 'can'=>'shall'
# ) # 'nothing you shall drink I shall drink'

# p sentence_swap('what a sad ad',
#     'cat'=>'dog', 'sad'=>'happy', 'what'=>'make'
# ) # 'make a happy ad'

# p sentence_swap('keep coding okay',
#     'coding'=>'running', 'kay'=>'pen'
# ) # 'keep running okay'

def hash_mapped(hash, proc, &prc)
    mapped = {}
    hash.each do |k,v|
        key = prc.call(k)
        value = proc.call(v)
        mapped[key] = value 
    end
    mapped 
end

# double = Proc.new { |n| n * 2 }
# p hash_mapped({'a'=>4, 'x'=>7, 'c'=>-3}, double) { |k| k.upcase + '!!' }
# # {"A!!"=>8, "X!!"=>14, "C!!"=>-6}

# first = Proc.new { |a| a[0] }
# p hash_mapped({-5=>['q', 'r', 's'], 6=>['w', 'x']}, first) { |n| n * n }
# # {25=>"q", 36=>"w"}

def counted_characters(str)
    counts = Hash.new(0)
    str.each_char {|char| counts[char] += 1}
    counts.keys.select {|k| counts[k] > 2}
end

# p counted_characters("that's alright folks") # ["t"]
# p counted_characters("mississippi") # ["i", "s"]
# p counted_characters("hot potato soup please") # ["o", "t", " ", "p"]
# p counted_characters("runtime") # []

def triplet_true(str)
    i = 0
    while i < str.length - 2
        return true if str[i] == str[i+1] && str[i] == str[i+2]
        i += 1
    end
    false
end

# p triplet_true('caaabb')        # true
# p triplet_true('terrrrrible')   # true
# p triplet_true('runninggg')     # true
# p triplet_true('bootcamp')      # false
# p triplet_true('e')             # false

def energetic_encoding(str, hash)
    str.split("").map do |char|
        if char == ' '
            ' '
        elsif hash.has_key?(char)
            hash[char]
        else
            "?"
        end
    end.join("")
end

# p energetic_encoding('sent sea',
#     'e'=>'i', 's'=>'z', 'n'=>'m', 't'=>'p', 'a'=>'u'
# ) # 'zimp ziu'

# p energetic_encoding('cat',
#     'a'=>'o', 'c'=>'k'
# ) # 'ko?'

# p energetic_encoding('hello world',
#     'o'=>'i', 'l'=>'r', 'e'=>'a'
# ) # '?arri ?i?r?'

# p energetic_encoding('bike', {}) # '????'

def uncompress(str)
    uncompressed = []
    i = 0
    while i < str.length - 1
        uncompressed << str[i] * str[i+1].to_i
        i += 2
    end
    uncompressed.join("")
end

# p uncompress('a2b4c1') # 'aabbbbc'
# p uncompress('b1o2t1') # 'boot'
# p uncompress('x3y1x2z4') # 'xxxyxxzzzz'

#################     Phase 2    ######################

def conjunct_select(arr, *procs)
    arr.select do |ele|
        procs.all? {|proc| proc.call(ele)}
    end
end

# is_positive = Proc.new { |n| n > 0 }
# is_odd = Proc.new { |n| n.odd? }
# less_than_ten = Proc.new { |n| n < 10 }

# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive) # [4, 8, 11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd) # [11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd, less_than_ten) # [7]

def pig_translate(word)
    vowels = 'aeiouAEIOU'
    return word + 'yay' if vowels.include?(word[0])
    word.each_char.with_index do |char, i|
        if vowels.include?(char)
            new_word = word[i..-1] + word[0...i] + 'ay'
            if word == word.capitalize
                return new_word.capitalize
            else
                return new_word
            end
        end
    end
end

def convert_pig_latin(sent)
    sent.split(" ").map do |word|
        if word.length < 3
            word 
        else
            pig_translate(word)
        end
    end.join(" ")
end

# p convert_pig_latin('We like to eat bananas') # "We ikelay to eatyay ananasbay"
# p convert_pig_latin('I cannot find the trash') # "I annotcay indfay ethay ashtray"
# p convert_pig_latin('What an interesting problem') # "Atwhay an interestingyay oblempray"
# p convert_pig_latin('Her family flew to France') # "Erhay amilyfay ewflay to Ancefray"
# p convert_pig_latin('Our family flew to France') # "Ouryay amilyfay ewflay to Ancefray"

def change_word(word)
    capitalized = (word == word.capitalize)
    vowels = 'aeiouAEIOU'
    if vowels.include?(word[-1]) && capitalized
        return (word * 2).capitalize
    elsif vowels.include?(word[-1])
        return word * 2
    end

    i = word.length - 1
    while i >= 0
        char = word[i]
        if vowels.include?(char)
            new_word = word + word[i..-1]
            if word == word.capitalize
                return new_word.capitalize
            else
                return new_word
            end
        end
        i -= 1
    end
end

def reverberate(sent)
    sent.split(" ").map do |word|
        if word.length < 3
            word 
        else
            change_word(word)
        end
    end.join(" ")
end

# p reverberate('We like to go running fast') # "We likelike to go runninging fastast"
# p reverberate('He cannot find the trash') # "He cannotot findind thethe trashash"
# p reverberate('Pasta is my favorite dish') # "Pastapasta is my favoritefavorite dishish"
# p reverberate('Her family flew to France') # "Herer familyily flewew to Francefrance"

def disjunct_select(arr, *procs)
    arr.select do |ele|
        procs.any? {|proc| proc.call(ele)}
    end
end

# longer_four = Proc.new { |s| s.length > 4 }
# contains_o = Proc.new { |s| s.include?('o') }
# starts_a = Proc.new { |s| s[0] == 'a' }

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
# ) # ["apple", "teeming"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o
# ) # ["dog", "apple", "teeming", "boot"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o,
#     starts_a
# ) # ["ace", "dog", "apple", "teeming", "boot"]

def vowels_indices(word)
    vowels = 'aeiou'
    indices = []
    word.each_char.with_index do |char,i|
        if vowels.include?(char)
            indices << i    
        end
    end
    indices
end

def alternating_vowel(sent)
    words = sent.split(" ")
    words.map.with_index do |word, i|
        indices = vowels_indices(word)
        if indices.empty?
            word
        elsif i.even?
            word[0...indices.first] + word[indices.first+1..-1]
        elsif i.odd?
            word[0...indices.last] + word[indices.last+1..-1]
        end
    end.join(" ")
end

# p alternating_vowel('panthers are great animals') # "pnthers ar grat animls"
# p alternating_vowel('running panthers are epic') # "rnning panthrs re epc"
# p alternating_vowel('code properly please') # "cde proprly plase"
# p alternating_vowel('my forecast predicts rain today') # "my forecst prdicts ran tday"

def vowels_change(word)
    vowels = 'aeiouAEIOU'
    word.split("").map do |char|
        if vowels.include?(char)
            char + 'b' + char 
        else
            char
        end
    end.join("")
end

def silly_talk(sent)
    vowels = 'aeiouAEIOU'
    sent.split(" ").map do |word|
        capitalized = (word == word.capitalize)
        last_char = word[-1]
        if vowels.include?(last_char)
            capitalized ? (word + last_char).capitalize : word + last_char
        else
            new_word = vowels_change(word)
            capitalized ? new_word.capitalize : new_word
        end
    end.join(" ")
end

# p silly_talk('Kids like cats and dogs') # "Kibids likee cabats aband dobogs"
# p silly_talk('Stop that scooter') # "Stobop thabat scobooboteber"
# p silly_talk('They can code') # "Thebey caban codee"
# p silly_talk('He flew to Italy') # "Hee flebew too Ibitabaly"

def compress(str)
    new_str = ''
    count = 1
    str.each_char.with_index do |char, i|
        if char == str[i+1]
            count += 1
        else  
            if count > 1 
                new_str += char + count.to_s 
            else
                new_str += char  
            end
            count = 1
        end
    end
    new_str
end

# p compress('aabbbbc')   # "a2b4c"
# p compress('boot')      # "bo2t"
# p compress('xxxyxxzzzz')# "x3yx2z4"