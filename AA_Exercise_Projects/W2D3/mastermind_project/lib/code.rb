class Code
  attr_reader :pegs

  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }
  def self.valid_pegs?(chars)
    chars.all? {|char| POSSIBLE_PEGS.has_key?(char.upcase)}
  end
  def initialize(chars)
    if Code.valid_pegs?(chars)
      @pegs = chars.map {|char| char.upcase}
    else
      raise 'not valid pegs'
    end
  end
  def self.random(len)
    chars = (0...len).map { POSSIBLE_PEGS.keys.sample }
    Code.new(chars)
  end
  def self.from_string(pegs)
    Code.new(pegs.split(""))
  end
  def [](idx)
    @pegs[idx]
  end
  def length
    @pegs.length
  end
  def num_exact_matches(code)
    count = 0
    code.pegs.each_with_index do |peg,i| 
      count += 1 if peg == @pegs[i]
    end
    count
  end
  def num_near_matches(code)
    self_copy = self.pegs.dup
    code_copy = code.pegs.dup

    code_copy.each_with_index do |peg,i| 
      if peg == @pegs[i]
        self_copy[i] = nil
        code_copy[i] = nil
      end
    end
    self_copy.delete(nil)
    code_copy.delete(nil)
    count = 0
    code_copy.each_with_index do |peg,i|
      if self_copy.include?(peg)
        count += 1
        self_copy.delete_at(self_copy.index(peg))
      end
    end
    count
  end
  def ==(code)
    code.pegs == self.pegs
  end
end
