class Bootcamp
  def initialize(name, slogan, student_capacity)
    @name = name
    @slogan = slogan
    @student_capacity = student_capacity
    @teachers = []
    @students = []
    @grades = Hash.new {|h,k| h[k] = []}
  end
  def name
    @name
  end
  def slogan
    @slogan
  end
  def teachers
    @teachers
  end
  def students
    @students
  end
  def hire(teacher)
    @teachers.push(teacher)
  end
  def enroll(student)
    if @students.length < @student_capacity
        @students.push(student)
        true
    else
        false
    end
  end
  def enrolled?(student)
    @students.include?(student)
  end
  def student_to_teacher_ratio
    @students.length / @teachers.length 
  end
  def add_grade(student, grade)
    if enrolled?(student)
        @grades[student] << grade
        true
    else
        false
    end
  end
  def num_grades(student)
    @grades[student].length
  end
  def average_grade(student)
    if enrolled?(student)
        grades = @grades[student]
        grades.length == 0 ? nil : grades.sum / grades.length
    else
        nil
    end
  end
end
