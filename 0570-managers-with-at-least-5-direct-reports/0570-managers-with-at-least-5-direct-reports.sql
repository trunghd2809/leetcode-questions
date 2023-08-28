# Write your MySQL query statement below
select m.name
from employee as m
inner join (
  select managerId, count(managerId) as total from employee
  group by managerId
  having total >= 5
)c on c.managerId = m.id
