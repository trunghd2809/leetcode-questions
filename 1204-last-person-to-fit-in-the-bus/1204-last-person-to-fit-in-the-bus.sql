# Write your MySQL query statement below

# select person_name 
# from (
#   select 
#     q.person_name,
#     (
#       select SUM(weight) 
#       from queue 
#       where queue.turn <= q.turn order by queue.turn
#     ) as weight
#   from queue as q
#   order by q.turn
# ) q3
# where q3.weight <= 1000
# order by weight DESC
# limit 1

SELECT person_name
FROM (
  SELECT
    q.person_name,
    SUM(weight) OVER (ORDER BY turn) AS weight_cumulative
  FROM queue q
) q3
WHERE weight_cumulative <= 1000
ORDER BY weight_cumulative DESC
LIMIT 1;
