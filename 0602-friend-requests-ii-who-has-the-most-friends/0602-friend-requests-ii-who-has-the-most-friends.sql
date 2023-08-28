# Write your MySQL query statement below
# 1 -> 2, 3, 
# 2 -> 3,  1
# 3 -> 4, 2, 1
with a as (
  select requester_id as id, count(*) num
  from RequestAccepted
  group by requester_id

  UNION ALL

  select accepter_id as id, count(*) num
  from RequestAccepted
  group by accepter_id
)
select
  id,
  sum(num) as num
from a
group by id
order by num desc
limit 1;
