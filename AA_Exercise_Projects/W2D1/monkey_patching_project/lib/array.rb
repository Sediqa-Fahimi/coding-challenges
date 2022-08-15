# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    return nil if self.empty?
    self.max - self.min
  end   
  def average
    return nil if self.empty?
    self.sum / (self.length * 1.0)
  end
  def median
    return nil if self.empty?
    sorted = self.sort
    if sorted.length.odd? 
        sorted[sorted.length/2]
    else
        (sorted[sorted.length/2] + sorted[(sorted.length/2)-1]) / 2.0
    end
  end
  def counts
    counts = Hash.new(0)
    self.each {|ele| counts[ele] += 1}
    counts
  end
  def my_count(value)
    count = 0
    self.each {|ele| count += 1 if ele == value}
    count 
  end
  def my_index(value)
    self.each_with_index do |ele, idx|
        return idx if ele == value
    end
    nil
  end
  def my_uniq
    hash = {}
    self.each {|ele| hash[ele] = true if !hash.has_key?(ele)}
    hash.keys
  end
  def my_transpose
    range = self.length
    (0...range).map do |i|
        self.map {|sub_array| sub_array[i]}
    end
  end
end
