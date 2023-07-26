WITH cte as (
  select 
    students.student_id,
    s.subject_name,
    students.student_name
  from subjects as s
  join students
)
select 
  cte.student_id as student_id,
  student_name, 
  cte.subject_name as subject_name,
  (
    select COUNT(*) from examinations as e
    where e.student_id = cte.student_id and e.subject_name = cte.subject_name
  ) as attended_exams
from cte
order by cte.student_id, cte.subject_name