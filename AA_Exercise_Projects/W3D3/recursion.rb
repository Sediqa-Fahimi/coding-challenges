def range(start, ending)
    return [] if start >= ending
    return [start] if start + 1 == ending
    [start] + range(start + 1, ending)
end 

# p range(3,1) #=> []
# p range(2,8) #=> [2,3,4,5,6,7]
# p range(-3,3) #=> [-3,-2,-1,0,1,2]

