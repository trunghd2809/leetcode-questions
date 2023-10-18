# Write your MySQL query statement below
select
  name 
from salesPerson
where sales_id not in (
  select
    sales_id
  from orders
  left join company on orders.com_id = company.com_id
  where company.name = 'RED'
)
order by sales_id