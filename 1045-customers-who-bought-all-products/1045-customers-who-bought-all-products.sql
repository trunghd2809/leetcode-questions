# Write your MySQL query statement below

# select customer_id
# from (
#   select customer_id
#   from customer
#   group by customer_id, product_key
# ) t
# group by customer_id
# having count(customer_id) = (select count(*) as total from product)

SELECT customer_id
FROM customer
GROUP BY customer_id
HAVING COUNT(DISTINCT product_key) = (SELECT COUNT(*) FROM product);
