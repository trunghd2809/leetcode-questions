select p.project_id, ROUND(AVG(e.experience_years), 2) as average_years
from project as p
inner join employee as e
  on p.employee_id = e.employee_id
GROUP BY p.project_id