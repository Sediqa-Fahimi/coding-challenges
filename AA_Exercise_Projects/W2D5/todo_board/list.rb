require_relative 'item'

class List
    attr_accessor :label
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
    def swap(index_1, index_2)
        if valid_index?(index_1) && valid_index?(index_2)
            @items[index_1], @items[index_2] = @items[index_2], @items[index_1]
            true
        else
            false
        end
    end
    def [](index)
        valid_index?(index) ? @items[index] : nil 
    end
    def priority
        @items.first
    end
end

