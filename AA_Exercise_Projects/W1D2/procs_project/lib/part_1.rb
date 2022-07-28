def my_map(arr, &prc)
    results = []
    arr.each do |ele|
        results << prc.call(ele)
    end
    results
end

def my_select(arr, &prc)
    selected = []
    arr.each do |ele|
        selected << ele if prc.call(ele) == true
    end
    selected
end

def my_count(arr, &prc)
    count = 0
    arr.each do |ele|
        count += 1 if prc.call(ele) == true
    end
    count 
end

def my_any?(arr, &prc)
    arr.each do |ele|
        return true if prc.call(ele) == true
    end
    false
end 

def my_all?(arr, &prc)
    arr.each do |ele|
        return false if prc.call(ele) == false
    end
    true
end

def my_none?(arr, &prc)
    arr.each do |ele|
        return false if prc.call(ele) == true
    end
    true
end