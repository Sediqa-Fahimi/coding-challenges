# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".
# def compress_str(str)
#     compressed = ''

#     i = 1
#     char = str[0]
#     count = 1
#     while i < str.length
#         if str[i] == char
#             count += 1
#         else 
#             compressed += (count > 1 ? count.to_s : "") + char
#             count = 1
#             char = str[i]
#         end
#         i += 1
#     end

#     return compressed + (count > 1 ? count.to_s : "") + char
# end

def compress_str(str)
    compressed = []
    arr = str.split("")

    i = 1
    char = arr[0]
    count = 1
    while i < arr.length
        if arr[i] == char
            count += 1
        else 
            compressed.push( (count > 1 ? count.to_s : "") , char)
            count = 1
            char = arr[i]
        end
        i += 1
    end

    return compressed.push((count > 1 ? count.to_s : ""), char).join()
end
p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
