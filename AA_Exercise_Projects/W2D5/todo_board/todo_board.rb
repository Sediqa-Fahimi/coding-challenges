require_relative 'list'

class TodoBoard
    def initialize(label)
        @list = List.new(label)
    end
    def get_command
        print "\nEnter a command:"
        cmd, *args = gets.chomp.split(" ")
        
        case cmd
        when "mktodo"
            @list.add_item(*args)
        when "up"
            num_args = args.map {|arg| arg.to_i}
            @list.up(*num_args)
        when "down"
            num_args = args.map {|arg| arg.to_i}
            @list.down(*num_args)
        when "swap"
            num_args = args.map {|arg| arg.to_i}
            @list.swap(*num_args)
        when "sort"
            @list.sort_by_date!
        when "priority"
            @list.print_priority
        when "print"
            if args.empty?
                @list.print
            else
                num_args = args.map {|arg| arg.to_i}
                @list.print_full_item(*num_args)
            end
        when "quit"
            return false
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