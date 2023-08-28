# Write your MySQL query statement below
select employee_id, name, reports_count, average_age
from (
  select 
    reports_to, 
    COUNT(employee_id) as reports_count,
    ROUND(AVG(age)) as average_age
  from employees
  group by reports_to
) t
inner join employees as e on e.employee_id = t.reports_to
order by employee_id ASC
