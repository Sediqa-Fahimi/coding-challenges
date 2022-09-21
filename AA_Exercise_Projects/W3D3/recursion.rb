def range(start, ending)
    return [] if start >= ending
    return [start] if start + 1 == ending
    [start] + range(start + 1, ending)
end 

# p range(3,1) #=> []
# p range(2,8) #=> [2,3,4,5,6,7]
# p range(-3,3) #=> [-3,-2,-1,0,1,2]

def exp1(b,n)
    return 1 if n == 0
    return b if n == 1
    b * exp1(b, n-1)
end

def exp2(b,n)
    return 1 if n == 0
    return b if n == 1
    if n % 2 == 0
        exp2(b, n / 2) ** 2
    else
        b * (exp2(b, (n - 1) / 2) ** 2)
    end
end
# p exp2(3,0) #=> 1
# p exp2(4,1) #=> 4
# p exp2(2,3) #=> 8

class Array
    def deep_dup
        copied = []
        self.each do |ele|
            if ele.is_a?(Array)
                copied << ele.deep_dup
            else
                copied << ele
            end
        end
        copied
    end
end
# arr = [1, [2], [3, [4]]]
# arr_copy = arr.deep_dup
# arr_copy[1] << 5
# p arr_copy #=> [1, [2, 5], [3, [4]]]
# p arr #=> [1, [2], [3, [4]]]


def fibonacci_rec(n)         
    return [0] if n == 1
    return [0,1] if n == 2
    fibs = fibonacci_rec(n-1) 
    fibs[n-1] = fibs[-1] + fibs[-2]
    fibs
end
def fibonacci_itr(n)
    fibs = []
    i = 0
    while fibs.length < n
        if i == 0
            fibs << 0 
        elsif i == 1
            fibs << 1 
        else
            fibs[i] = fibs[i-1] + fibs[i-2]
        end
        i += 1
    end
    fibs
end
#  1 2 3 4 5 6 7  8  9
# [0,1,1,2,3,5,8,13,21]
# p fibonacci_itr(1) #=> [0] 
# p fibonacci_itr(2) #=> [0,1]
# p fibonacci_itr(3) #=> [0,1,1]
# p fibonacci_itr(4) #=> [0,1,1,2]
# p fibonacci_itr(5) #=> [0,1,1,2,3]
# p fibonacci_itr(9) #=> [0,1,1,2,3,5,8,13,21]

# p fibonacci_rec(1) #=> [0] 
# p fibonacci_rec(2) #=> [0,1]
# p fibonacci_rec(3) #=> [0,1,1]
# p fibonacci_rec(4) #=> [0,1,1,2]
# p fibonacci_rec(5) #=> [0,1,1,2,3]
# p fibonacci_rec(9) #=> [0,1,1,2,3,5,8,13,21]