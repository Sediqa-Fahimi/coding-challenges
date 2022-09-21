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
p exp2(3,0) #=> 1
p exp2(4,1) #=> 4
p exp2(2,3) #=> 8