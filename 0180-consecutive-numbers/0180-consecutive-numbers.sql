# Write your MySQL query statement below
select distinct a.num as ConsecutiveNums
from logs a
inner join logs b on b.id=a.id + 1 and b.num = a.num
inner join logs c on c.id=a.id + 2 and c.num= a.num

# select distinct num
# from (
#     select num, LEAD(num) over (ORDER BY id) as lead, LAG(num) over(order by id) from logs
# ) t
# where t.lead = num and t.lag = num