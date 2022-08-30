require_relative 'item'

class List
    attr_accessor :label
    attr_reader :items
    def initialize(label)
        @label = label
        @items = []
    end
    def add_item(title, deadline, description = " ")
        begin
            @items << Item.new(title, deadline, description)
            return true
        rescue => exception
            return false
        end
    end
    def size 
        @items.length
    end
    def valid_index?(index)
        if index < 0 || index >= size
            false
        else
            true
        end
    end
end

# mylist = List.new('importants')
# p mylist.add_item('laundry', '2019-12-03')
# p mylist.add_item('laundry2', '2019-12-04')
# p mylist.items
# p mylist.valid_index?(-1)
# p mylist.valid_index?(0)
# p mylist.valid_index?(2)