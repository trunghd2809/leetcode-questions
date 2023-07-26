select 
  DATE_FORMAT(trans_date, "%Y-%m") as month,
  country,
  count(*) as trans_count,
  SUM(IF(state='approved', 1, 0)) as approved_count,
  SUM(amount) as trans_total_amount,
  SUM(IF(state='approved', amount, 0)) as approved_total_amount
from transactions
group by month, country