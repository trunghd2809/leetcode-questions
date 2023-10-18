# Write your MySQL query statement below
select
  u.name,
  IFNULL(d.travelled_distance, 0) as travelled_distance
from users u
left join (
  select
    user_id,
    sum(distance) as travelled_distance
  from rides
  group by user_id
) d on d.user_id = u.id
order by d.travelled_distance DESC, u.name ASC
