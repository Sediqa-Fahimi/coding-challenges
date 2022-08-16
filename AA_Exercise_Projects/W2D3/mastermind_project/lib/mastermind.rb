require_relative "code"

class Mastermind
    def initialize(len)
        @secret_code = Code.random(len)
    end
    def print_matches(code)
        exact_matches = @secret_code.num_exact_matches(code)
        puts 'number of exact matches:' + exact_matches.to_s
        near_matches = @secret_code.num_near_matches(code)
        puts 'number of near matches:' + near_matches.to_s
    end
    def ask_user_for_guess
        puts 'Enter a code'
        str = gets.chomp
        code = Code.from_string(str)
        print_matches(code)
        @secret_code == code
    end
end
