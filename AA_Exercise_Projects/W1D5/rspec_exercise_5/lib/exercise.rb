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
