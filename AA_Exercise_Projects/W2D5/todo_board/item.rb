
class Item
    attr_accessor :title, :description
    attr_reader :deadline
    def self.valid_date?(date)
        parts = date.split("-")
        year = parts[0]
        month = parts[1]
        day = parts[2]
        if year.length != 4
            return false
        end
        if month.length != 2 || month.to_i < 1 || month.to_i > 12
            return false
        end
        if day.length != 2 || day.to_i < 1 || day.to_i > 31
            return false
        end
        true
    end
    def initialize(title, deadline, description)
        @title = title
        if Item.valid_date?(deadline)
            @deadline = deadline
        else
            raise 'YYYY-MM-DD is correct format'
        end
        @description = description
    end
    def deadline=(new_deadline)
        if Item.valid_date?(new_deadline)
            @deadline = new_deadline
        else
            raise 'correct format is YYYY-MM-DD'
        end
    end

end

