select ROUND(AVG(g.type) * 100, 2) as immediate_percentage
from (
  select 
    d.customer_id, customer_pref_delivery_date, order_date,
    IF(customer_pref_delivery_date=order_date, 1, 0) as type
  from delivery as d
  join (
    select 
      customer_id,
      MIN(order_date) as min
    from delivery
    group by customer_id
  ) m on m.customer_id = d.customer_id and m.min = d.order_date
) g