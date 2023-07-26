select employee_id
from employees
where 
  salary < 30000 and manager_id IS NOT NULL
  and manager_id NOT IN (select employee_id from employees)
order by employee_id