select
  s.id,
  IFNULL(s1.student, s.student) as student
from seat as s
left join
  (
    select id, student from seat
  ) s1 on s1.id = IF(s.id % 2 = 0, s.id - 1, s.id + 1)