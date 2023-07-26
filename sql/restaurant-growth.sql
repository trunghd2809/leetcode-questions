with a as (
  select visited_on, sum(amount) as amount
  from customer
  group by visited_on
  order by visited_on
),
b as (
  select
    *,
    sum(amount) OVER(
      ORDER BY visited_on ASC
      ROWS 6 PRECEDING
    ) as total
  from a
)
select
  visited_on,
  total as amount,
  round(total / 7, 2) as average_amount
from b
where b.visited_on >= ADDDATE((select min(visited_on) from b), INTERVAL 6 DAY)
