# require 'byebug'
# def zip(*args)
#     args.transpose
# end
# def zip(*args)
#     col = args[0].length
#     row = args.length
#     zip = Array.new(col) {Array.new(row)}
#     (0...col).each do |i|
#         (0...row).each do |j|
#             zip[i][j] = args[j][i]
#         end
#     end
#     zip
# end
def zip(*arrays)
    length = arrays.first.length
    (0...length).map do |i|
        arrays.map {|array| array[i]}
    end
end

def prizz_proc(arr, prc1, prc2)
    arr.select {|ele| (prc1.call(ele) || prc2.call(ele)) && !(prc1.call(ele) && prc2.call(ele))}
end

# def zany_zip(*args)
#     col = args.length
#     row = args.inject(0) do |accu,subarray|
#         if accu > subarray.length
#             accu
#         else 
#             subarray.length
#         end
#     end
#     zip = Array.new(row) {Array.new(col)}
#     (0...row).each do |i|
#         (0...col).each do |j|
#             zip[i][j] = args[j][i]
#         end
#     end
#     zip
# end

def zany_zip(*arrays)
    # length = arrays.map {|array| array.length}.max
    length = arrays.map(&:length).max 
    (0...length).map do |i|
        arrays.map {|array| array[i]}
    end
end

# def maximum(arr, &prc)
#     return nil if arr.empty?
#     final_ele = 0
#     arr.inject(0) do |accu, ele|
#         result = prc.call(ele)
#         if accu <= result
#             final_ele = ele
#             result 
#         else
#             accu
#         end
#     end
#     final_ele
# end

def maximum(arr, &prc)
    return nil if arr.empty?
    max = arr.first
    arr.each do |ele|
        max = ele if prc.call(ele) >= prc.call(max)
    end
    max
end

# def my_group_by(arr, &prc)
#     groups = {}
#     arr.each do |ele|
#         res = prc.call(ele)
#         groups[res] ? groups[res] << ele : groups[res] = [ele]
#     end 
#     groups
# end
def my_group_by(arr, &prc)
    groups = Hash.new {|h,k| h[k] = []}
    arr.each do |ele|
        key = prc.call(ele)
        groups[key] << ele  
    end
    groups
end

# def tie_breaker(ele1, ele2, proc)
#     res1 = proc.call(ele1)
#     res2 = proc.call(ele2)
#     res1 > res2 ? [res1,ele1] : [res2,ele2]
# end

# def max_tie_breaker(arr, proc, &prc)
#     return nil if arr.empty?
#     final_ele = ''
#     arr.inject(0) do |accu, ele|
#         result = prc.call(ele)
#         if accu < result
#             final_ele = ele
#             result 
#         elsif accu == result
#             proc_ele = tie_breaker(ele,final_ele,proc)
#             final_ele = proc_ele[1]
#             result
#         else
#             accu
#         end
#     end
#     final_ele
# end

def max_tie_breaker(arr, tie_breaker, &prc)
    return nil if arr.empty?
    max = arr.first
    arr.each do |ele|
        result_ele = prc.call(ele)
        result_max = prc.call(max)
        if result_ele > result_max
            max = ele 
        elsif result_ele == result_max && tie_breaker.call(ele) > tie_breaker.call(max)
            max = ele
        end
    end
    max
end

# def vowels_count(word)
#     vowels = 'aeiou'
#     word.split("").count {|char| vowels.include?(char)}
# end
# def remove_vowels(word)
#     vowels = 'aeiou'
#     first_idx = 0
#     last_idx = 0
#     i = 0
#     while i < word.length
#         if vowels.include?(word[i])
#             first_idx = i   
#             break
#         end
#         i += 1
#     end
#     i = word.length - 1
#     while i >= 0
#         if vowels.include?(word[i])
#             last_idx = i   
#             break
#         end
#         i -= 1
#     end
#     word[first_idx..last_idx]
# end

# def silly_syllables(sent)
#     sent.split(" ").map do |word|
#         if vowels_count(word) < 2
#             word 
#         else
#             remove_vowels(word)
#         end
#     end.join(" ")
# end

def vowel_indices(word)
    vowels = 'aeiou'
    indices = []
    word.each_char.with_index do |char, idx|
        indices << idx if vowels.include?(char)
    end
    indices
end
def silly_syllables(sent)
    sent.split(" ").map do |word|
        vowels_idxs = vowel_indices(word) # an array of vowels indices in a word
        if vowels_idxs.length < 2
            word 
        else
            word[vowels_idxs.first..vowels_idxs.last]
        end
    end.join(" ")
end