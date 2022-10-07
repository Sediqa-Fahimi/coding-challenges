require 'byebug'

def range(start, ending)
    return [] if start >= ending
    return [start] if start + 1 == ending
    [start] + range(start + 1, ending)
end 

p range(3,1) #=> []
p range(2,8) #=> [2,3,4,5,6,7]
p range(-3,3) #=> [-3,-2,-1,0,1,2]

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

def bsearch(arr, target)
    return nil if arr.empty?
    mid_idx = arr.length / 2
    left = arr[0...mid_idx]
    right = arr[mid_idx+1..-1]
    if arr[mid_idx] == target
        return mid_idx
    elsif arr[mid_idx] < target
        result = bsearch(right, target)
        if result.nil?
            nil
        else
            mid_idx + 1 + result
        end
    elsif arr[mid_idx] > target
        bsearch(left, target)
    end
end

# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
# p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 7) # => nil

def quick_sort(arr)
    return arr if arr.length <= 1
    pivot = arr.first
    left = arr.drop(1).select {|ele| ele < pivot}
    right = arr.drop(1).select {|ele| ele >= pivot}
    quick_sort(left) + [pivot] + quick_sort(right)
end

# p quick_sort([4,1,7,3,6,4])
# p quick_sort([])
# p quick_sort([3])
# p quick_sort([100,3,-4,0,-200,300])

def merge_sort(arr)
    return arr if arr.length <= 1
    mid_idx = arr.length / 2
    left = arr[0...mid_idx]
    right = arr[mid_idx..-1]
    sorted_left = merge_sort(left)
    sorted_right = merge_sort(right)
    merge(sorted_left, sorted_right)
end
def merge(left, right)
    sorted = []
    while !left.empty? && !right.empty?
        if left.first < right.first
            sorted.push(left.shift)
        else
            sorted.push(right.shift)
        end
    end
    sorted + left + right
end

# p merge_sort([4,1,7,3,6,4])
# p merge_sort([])
# p merge_sort([3])
# p merge_sort([100,3,-4,0,-200,300])

def subsets(arr)
    return [[]] if arr.empty?
    subs = subsets(arr[0..-2])
    copy = subs.map {|sub_arr| sub_arr.map {|ele| ele}}
    copy.each do |sub_arr|
        sub_arr << arr[-1]
    end
    subs + copy
end
# p subsets([]) # => [[]]
# p subsets([1]) # => [[], [1]]
# p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# p subsets([1, 2, 3])
#=> [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

def permutations(arr)
    return [arr] if arr.length <= 1
    first = arr.shift
    perms = permutations(arr)
    all_permutations = []
    perms.each do |perm|
        (0..perm.length).each do |i|
           all_permutations << perm[0...i] + [first] + perm[i..-1]
        end
    end
    all_permutations
end
# p permutations([]) # => [[]]
# p permutations([1]) # => [[1]]
# p permutations([1, 2]) # => [[1, 2], [2, 1]]
# p permutations([1, 2, 3])   # =>   [[1, 2, 3], [1, 3, 2],
                            #       [2, 1, 3], [2, 3, 1],
                            #       [3, 1, 2], [3, 2, 1]]

# Iteratively:
# def greedy_make_change(amount, coins = [25, 10, 5, 1])
#     changes = []
#     i = 0
#     while amount > 0
#         coin = coins[i]
#         num_coins = amount / coin
#         remainder = amount % coin
#         num_coins.times {changes << coin}
#         amount = remainder
#         i += 1
#     end
#     changes
# end

# Recursively:
def greedy_make_change(amount, coins = [25,10,5,1])
    return [] if amount == 0
    changes = []
    coin = coins.shift
    num_coins = amount / coin
    remainder = amount % coin
    num_coins.times {changes << coin}
    changes.push(*greedy_make_change(remainder, coins))
    changes
end

# p greedy_make_change(39, [25,10,5,1]) 
# p greedy_make_change(14, [10, 7, 1])

def make_better_change(amount, coins = [25,10,5,1])
    return [] if amount == 0
    least_changes = nil
    coins.each do |coin|
        next if coin > amount

        change_for_rest = make_better_change(amount - coin, coins)
        possible_change = [coin] + change_for_rest
        if least_changes.nil? || possible_change.length < least_changes.length
            least_changes = possible_change
        end
    end
    least_changes
end

# p make_better_change(39, [25,10,5,1]) 
# p make_better_change(14, [10, 7, 1])

