def my_reject(arr, &prc)
    arr.select {|ele| !prc.call(ele)}
end

def my_one?(arr, &prc)
    count = arr.count {|ele| prc.call(ele)}
    count == 1
end

def hash_select(hash, &prc)
    selected = {}
    hash.each do |k,v|
        selected[k] = v if prc.call(k,v)
    end
    selected
end

def xor_select(arr, prc1, prc2)
    arr.select {|ele| (prc1.call(ele) || prc2.call(ele)) && !(prc1.call(ele) && prc2.call(ele))}
end

def proc_count(val, arr)
    arr.count {|prc| prc.call(val)}
end
