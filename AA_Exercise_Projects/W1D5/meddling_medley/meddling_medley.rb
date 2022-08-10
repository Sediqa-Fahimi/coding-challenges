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

