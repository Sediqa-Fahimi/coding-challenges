-- Write a solution to find the number of times each student attended each exam.
select s.student_id, s.student_name, sub.subject_name, coalesce(grouped.attended_exams, 0) As attended_exams
from Students s
cross join Subjects sub
left join (
    select student_id, subject_name, count(*) as attended_exams
    from Examinations
    group by student_id, subject_name
) grouped
on s.student_id = grouped.student_id AND sub.subject_name = grouped.subject_name
order by s.student_id, sub.subject_name;

-- Write a solution to report the name and bonus amount of each employee with a bonus less than 1000.
select name, bonus
from Employee
left join Bonus
on Employee.empId = Bonus.empId
where bonus < 1000 or bonus is null;