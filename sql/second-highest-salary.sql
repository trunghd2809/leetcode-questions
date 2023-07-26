WITH T as(
  select Salary as sal, Dense_Rank() OVER (order by salary desc) as rnk from Employee
)
Select Max(sal) as SecondHighestSalary  from T where rnk=2 ;