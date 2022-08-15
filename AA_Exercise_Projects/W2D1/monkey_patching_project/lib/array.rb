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

end
