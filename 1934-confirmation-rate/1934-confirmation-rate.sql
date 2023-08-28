# Write your MySQL query statement below
WITH tem as (
  select user_id, action, COUNT(*) as total from confirmations
  group by user_id, action
)
select user_id, 
IFNULL(ROUND(IFNULL((select total from tem where tem.user_id = signups.user_id and tem.action = 'confirmed'), 0) / (IFNULL((select total from tem where tem.user_id = signups.user_id and tem.action = 'timeout'), 0) + IFNULL((select total from tem where tem.user_id = signups.user_id and tem.action = 'confirmed'),0)), 2), 0) as confirmation_rate
from signups
