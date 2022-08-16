require "employee"

class Startup
    attr_reader :name, :funding, :salaries, :employees
    def initialize(name, funding, salaries)
        @name = name
        @funding = funding
        @salaries = salaries
        @employees = []
    end
    def valid_title?(title)
        @salaries.has_key?(title)
    end
    def >(another_startup)
        self.funding > another_startup.funding
    end
    def hire(employee_name, title)
        if !valid_title?(title)
            raise 'invalid title'
        else
            @employees << Employee.new(employee_name,title)
        end
    end
    def size
        @employees.length
    end
    def pay_employee(employee)
        salary = @salaries[employee.title]
        if @funding >= salary
            employee.pay(salary)
            @funding -= salary
        else
            raise 'not enough funds available'
        end
    end
    def payday
        @employees.each do |employee|
            pay_employee(employee)
        end
    end
    def average_salary
        sum = 0
        @employees.each do |employee|
            sum += @salaries[employee.title]
        end
        sum / @employees.length
    end
    def close
        @employees = []
        @funding = 0
    end
    def acquire(another_startup)
        @funding += another_startup.funding
        another_startup.salaries.each do |title, salary|
            if !self.salaries.has_key?(title)
                self.salaries[title] = salary
            end
        end
        another_startup.employees.each do |employee|
            self.employees.push(employee)
        end
        another_startup.close
    end
end
