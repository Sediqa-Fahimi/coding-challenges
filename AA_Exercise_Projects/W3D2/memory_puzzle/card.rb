class Card
    attr_reader :value
    def initialize(value)
        @value = value
        @face_up = false
    end
    def display_card
        if @face_up
            @value
        else
            " "
        end
    end
    def hide
        @face_up = false
    end
    def reveal
        @face_up = true
    end
    def to_s
        @value
    end
    def ==(other_value)
        @value == other_value
    end
end