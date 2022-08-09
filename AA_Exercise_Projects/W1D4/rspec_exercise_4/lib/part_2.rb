def proper_factors(num)
    (1...num).select {|n| num % n == 0}
end

def aliquot_sum(num)
    sum = 0
    proper_factors(num).each {|n| sum += n}
    sum
end

def perfect_number?(num)
    num == aliquot_sum(num) ? true : false  
end

def ideal_numbers(n)
    ideals = []
    i = 1
    while ideals.length < n 
        ideals << i if perfect_number?(i)
        i += 1
    end
    ideals
end