# Write your MySQL query statement below

select MAX(num) as num
from (
  select num
  from mynumbers
  group by num
  having COUNT(num) = 1
) tem