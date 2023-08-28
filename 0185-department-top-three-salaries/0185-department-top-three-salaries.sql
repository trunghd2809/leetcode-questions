# Write your MySQL query statement below

SELECT r.department, r.employee, r.salary FROM (
    SELECT 
        e.name as employee, e.salary, d.name as department,
        dense_rank() OVER(PARTITION BY e.departmentID ORDER BY e.salary DESC) as 'rank'
    FROM employee e
    LEFT JOIN department d ON e.departmentId = d.id
) as r
WHERE r.rank <=3