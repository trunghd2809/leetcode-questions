# Write your MySQL query statement below
select 
  p.product_id,
  p.product_name
from product p
inner join (
  select
    product_id
  from sales
  group by product_id
  having max(sale_date) <= '2019-03-31' and min(sale_date) >= '2019-01-01'
) s on s.product_id = p.product_id
