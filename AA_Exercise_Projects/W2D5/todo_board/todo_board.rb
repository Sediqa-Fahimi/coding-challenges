require_relative 'list'

class TodoBoard
    def initialize
        @lists = {}
    end
    def get_command
        print "\nEnter a command:"
        cmd, *args = gets.chomp.split(" ")
        list_label = args.shift
        case cmd
        when "mklist"
            @lists[list_label] = List.new(list_label)
        when "ls"
            puts "Lists Labels"
            puts "-------"
            @lists.each do |k,v|
                puts k
            end
        when "showall"
            puts "All Lists"
            puts "**********"
            @lists.each do |k,v|
                v.print
            end
        when "mktodo"
            @lists[list_label].add_item(*args)
        when "up"
            num_args = args.map {|arg| arg.to_i}
            @lists[list_label].up(*num_args)
        when "down"
            num_args = args.map {|arg| arg.to_i}
            @lists[list_label].down(*num_args)
        when "swap"
            num_args = args.map {|arg| arg.to_i}
            @lists[list_label].swap(*num_args)
        when "sort"
            @lists[list_label].sort_by_date!
        when "priority"
            @lists[list_label].print_priority
        when "print"
            if args.empty?
                @lists[list_label].print
            else
                num_args = args.map {|arg| arg.to_i}
                @lists[list_label].print_full_item(*num_args)
            end
        when "quit"
            return false
        when "toggle"
            num_args = args.map {|arg| arg.to_i}
            @lists[list_label].toggle_item(*num_args)
        when "rm"
            num_args = args.map {|arg| arg.to_i}
            @lists[list_label].remove_item(*num_args)
        when "purge"
            @lists[list_label].purge
        else
            print "Sorry, that command is not recognized."
        end

        true
    end
    def run 
        until get_command == false
            get_command
        end
    end
end

my_board = TodoBoard.new

my_board.run