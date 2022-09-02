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
    def print
        puts '-------------'
        puts @label
        puts '-------------'
        puts "Index | Item            | Deadline  "
        puts "-----------------------------------------"
        @items.each_with_index do |item, idx|
            puts "#{idx}    | #{item.title}       | #{item.deadline}"
        end
        puts "-----------------------------------------"
    end
    def print_full_item(index)
        if valid_index?(index)
            item = @items[index]
            puts "-----------------------------------------"
            puts "#{item.title}             #{item.deadline}"
            puts "#{item.description}"
            puts "-----------------------------------------"
        end
    end
    def print_priority
        print_full_item(0)
    end
    def up(index, amount = 1)
        if valid_index?(index)
            i = 0
            while i < amount && index > 0
                @items[index], @items[index - 1] = @items[index - 1], @items[index]
                i += 1
                index -= 1
            end
            true
        else
            return false
        end
    end
    def down(index, amount = 1)
        if valid_index?(index)
            i = 0
            while i < amount && index < @items.length - 1
                @items[index], @items[index + 1] = @items[index + 1], @items[index]
                i += 1
                index += 1
            end
            true
        else
            return false
        end
    end
    def sort_by_date!
        @items.sort_by! {|item| item.deadline }
    end
end

# l = List.new('Groceries')
# l.add_item('cheese', '2019-10-25')
# l.add_item('toothpaste', '2019-10-25')
# l.add_item('shampoo', '2019-10-24')
# l.add_item('candy', '2019-10-31')
# l.print
# l.sort_by_date!
# l.print