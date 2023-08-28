# Write your MySQL query statement below

select name, bonus
from employee
left join bonus 
on bonus.empId = employee.empId 
where bonus < 1000 or bonus is NULL