# require 'byebug'
# def zip(*args)
#     args.transpose
# end
def zip(*args)
    col = args[0].length
    row = args.length
    zip = Array.new(col) {Array.new(row)}
    (0...col).each do |i|
        (0...row).each do |j|
            zip[i][j] = args[j][i]
        end
    end
    zip
end

def prizz_proc(arr, prc1, prc2)
    arr.select {|ele| (prc1.call(ele) || prc2.call(ele)) && !(prc1.call(ele) && prc2.call(ele))}
end

def zany_zip(*args)
    col = args.length
    row = args.inject(0) do |accu,subarray|
        if accu > subarray.length
            accu
        else 
            subarray.length
        end
    end
    zip = Array.new(row) {Array.new(col)}
    (0...row).each do |i|
        (0...col).each do |j|
            zip[i][j] = args[j][i]
        end
    end
    zip
end

def maximum(arr, &prc)
    return nil if arr.empty?
    final_ele = 0
    arr.inject(0) do |accu, ele|
        result = prc.call(ele)
        if accu <= result
            final_ele = ele
            result 
        else
            accu
        end
    end
    final_ele
end

def my_group_by(arr, &prc)
    groups = {}
    arr.each do |ele|
        res = prc.call(ele)
        groups[res] ? groups[res] << ele : groups[res] = [ele]
    end 
    groups
end
def tie_breaker(ele1, ele2, proc)
    res1 = proc.call(ele1)
    res2 = proc.call(ele2)
    res1 > res2 ? [res1,ele1] : [res2,ele2]
end

def max_tie_breaker(arr, proc, &prc)
    return nil if arr.empty?
    final_ele = ''
    arr.inject(0) do |accu, ele|
        result = prc.call(ele)
        if accu < result
            final_ele = ele
            result 
        elsif accu == result
            proc_ele = tie_breaker(ele,final_ele,proc)
            final_ele = proc_ele[1]
            result
        else
            accu
        end
    end
    final_ele
end