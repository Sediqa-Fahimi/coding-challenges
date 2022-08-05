def is_prime?(num)
    return false if num < 2
    (2...num).each do |factor|
        return false if num % factor == 0
    end
    true
end

def nth_prime(n)
    n_th_prime = 0
    count = 0
    i = 2
    while count < n  
        if is_prime?(i)
            count += 1
            n_th_prime = i   
        end
        i += 1
    end
    n_th_prime
end

def prime_range(min, max)
    return [] if max < 2
    primes = []
    (min..max).each do |num|
        if is_prime?(num)
            primes << num 
        end
    end
    primes
end