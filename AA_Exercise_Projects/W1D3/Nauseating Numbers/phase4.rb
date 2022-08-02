def prime?(num)
    return false if num < 2
    (2...num).each do |n|
        return false if num % n == 0
    end
    true
end
def mersenne_prime(n)
    mersenne_primes = []
    i = 2
    while mersenne_primes.length < n
        potential_prime = (2 ** i) - 1
        if prime?(potential_prime)
            mersenne_primes << potential_prime
        end
        i += 1
    end
    mersenne_primes[n-1]
end

p mersenne_prime(1) # 3
p mersenne_prime(2) # 7
p mersenne_prime(3) # 31
p mersenne_prime(4) # 127
p mersenne_prime(6) # 131071