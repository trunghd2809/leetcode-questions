SELECT
  ROUND((COUNT(*) / (select COUNT(distinct(player_id)) from activity)), 2) as fraction
FROM
  activity AS a
WHERE
    (a.player_id, DATE_SUB(a.event_date, INTERVAL 1 DAY)) 
    IN (SELECT player_id , MIN(event_date) FROM activity group by player_id);
