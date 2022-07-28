def reverser(str, &prc)
    prc.call(str.reverse)
end

def word_changer(sent, &prc)
    sent.split(" ").map {|word| prc.call(word)}.join(" ")
end

def greater_proc_value(num, prc1, prc2)
    result1 = prc1.call(num)
    result2 = prc2.call(num)

    result1 > result2 ? result1 : result2
end

def and_selector(arr, prc1, prc2)
    arr.select {|ele| prc1.call(ele) == true && prc2.call(ele) == true}
end

def alternating_mapper(arr, prc1, prc2)
    arr.map.with_index do |ele, i|
        if i.even?
            prc1.call(ele)
        else
            prc2.call(ele)
        end
    end
end