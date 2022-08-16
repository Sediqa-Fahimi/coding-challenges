require_relative "room"

class Hotel
    attr_reader :rooms
    def initialize(name, rooms)
        @name = name
        @rooms = {}
        rooms.each do |k,v|
            @rooms[k] = Room.new(v)
        end
    end
    
    def name
        @name.split(" ").map {|word| word.capitalize}.join(" ")
    end
    def room_exists?(name)
        @rooms.has_key?(name) ? true : false
    end
    def check_in(person, room)
        if room_exists?(room)
            if @rooms[room].add_occupant(person)
                puts 'check in successful'
            else
                puts 'sorry, room is full'
            end
        else
            puts 'sorry, room does not exist'
        end
    end
    def has_vacancy?
        @rooms.any? {|k, room| !room.full? }
    end
    def list_rooms
        @rooms.each do |room_name, room|
            puts room_name + ' ' + room.available_space.to_s
        end
    end
end
