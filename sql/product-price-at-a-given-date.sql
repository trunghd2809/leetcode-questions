WITH A as (
  select products.product_id, new_price as price
  from products
  inner join (
    select product_id, max(change_date) as date
    from products
    where change_date <= '2019-08-16'
    group by product_id
  ) t on t.product_id = products.product_id and t.date = products.change_date
  group by product_id
),
B as (
  select products.product_id, If(products.new_price, 10, 10) as price
  from products
  LEFT JOIN A ON products.product_id = A.product_id
  WHERE A.product_id IS NULL
  group by products.product_id
)
select * from A
UNION
select * from B