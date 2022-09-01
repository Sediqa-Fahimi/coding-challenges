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
end

my_list = List.new('Groceries')

p my_list.add_item('cheese', '2019-10-25', 'Get American and Feta for good measure.')
p my_list.add_item('toothpaste', '2019-10-25')
p my_list.add_item('shampoo', '2019-10-24')
p my_list.add_item('candy', '2019-10-31', '4 bags should be enough')
my_list.print
my_list.print_priority

