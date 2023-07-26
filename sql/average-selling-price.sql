select u.product_id, ROUND(SUM((u.units * p.price))/ SUM(u.units), 2) as average_price 
from unitsSold as u
left join prices as p 
    on u.product_id = p.product_id 
    and u.purchase_date >= p.start_date 
    and u.purchase_date <= p.end_date
group by u.product_id