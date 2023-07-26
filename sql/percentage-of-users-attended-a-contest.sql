select 
    contest_id,
    ROUND(((COUNT(*) * 100) / (select COUNT(*) from users)), 2) as percentage
from register
group by contest_id
order by percentage DESC, 
    CASE
        WHEN percentage = '100' THEN contest_id
        ELSE contest_id
    END ASC;