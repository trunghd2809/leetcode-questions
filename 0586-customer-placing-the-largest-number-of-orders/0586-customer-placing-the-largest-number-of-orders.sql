# Write your MySQL query statement below
select
  customer_number
from (
  select
    customer_number,
    count(order_number) as count
  from orders
  group by customer_number
) a
order by count DESC
limit 1