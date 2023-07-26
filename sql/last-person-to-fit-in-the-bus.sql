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