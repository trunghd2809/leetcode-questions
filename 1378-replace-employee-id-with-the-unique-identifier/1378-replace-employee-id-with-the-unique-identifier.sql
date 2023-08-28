# Write your MySQL query statement below
select unique_id, name
from employees
left join employeeUNI 
on employeeUNI.id = employees.id