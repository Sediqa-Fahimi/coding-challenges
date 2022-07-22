def hipsterfy(word)
    vowels = 'aeiou'
    i = word.length - 1
    while i >= 0
        if vowels.include?(word[i])
            word[i] = ''
            return word
        end
        i -= 1
    end
    word
end

def vowel_counts(str)
    vowels = 'aeiouAEIOU'
    vowel_counter = Hash.new(0)

    str.each_char { |char| vowel_counter[char.downcase] += 1 if vowels.include?(char) }

    vowel_counter
end

def caesar_cipher(text, num)
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    new_text = ''

    text.each_char.with_index do |char, i|
        if alpha.include?(char)
            old_idx = alpha.index(char)
            new_idx = (old_idx + num) % alpha.length
            new_text += alpha[new_idx]
        else
            new_text += char
        end
    end

    new_text
end