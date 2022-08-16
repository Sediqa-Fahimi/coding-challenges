class Room
    attr_reader :capacity, :occupants
    def initialize(capacity)
        @capacity = capacity
        @occupants = []
    end

    def full?
        if @occupants.length < @capacity
            false
        elsif @occupants.length == @capacity
            true
        end
    end
    def available_space
        @capacity - @occupants.length
    end

    def add_occupant(name)
        if full?
            false
        else
            @occupants.push(name)
            true
        end
    end
end