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
  # def num_near_matches(code)
  #   return 0 if num_exact_matches(code) == @pegs.length
  #   code.pegs.each_with_index do |peg, i|
  #     if peg == @pegs[i]

  #     else

  #     end
  #   end
  # end
  def ==(code)
    code.pegs == self.pegs
  end
end
