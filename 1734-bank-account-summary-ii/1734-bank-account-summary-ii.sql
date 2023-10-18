# Write your MySQL query statement below
select
  name,
  totalAmount as balance
from users u
inner join (
  select
    account,
    sum(amount) as totalAmount
  from transactions
  group by account
  having totalAmount > 10000
) t on t.account = u.account