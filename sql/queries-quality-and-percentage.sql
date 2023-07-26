select 
    query_name,
    ROUND(AVG((rating / position)), 2) as quality,
    ROUND((SUM(IF(rating < 3, 1, 0)) / COUNT(*)) * 100, 2) as poor_query_percentage
from queries
group by query_name