# # Write your MySQL query statement below
# WITH tem as(
# select player_id, ADDDATE(event_date, 1) as event_date
# from activity
# where (player_id, event_date) 
#   in (select player_id, min(event_date) as event_date from activity as a 
#     where a.player_id = activity.player_id)
# )
# select 
#   ROUND((COUNT(*) / (select COUNT(distinct(player_id)) from activity)), 2) as fraction
# from tem
# inner join activity as c
# on c.event_date = tem.event_date and tem.player_id=c.player_id

# select 
#   ROUND((COUNT(*) / (select COUNT(distinct(player_id)) from activity)), 2) as fraction
# from activity as a
# inner join activity as c
#   on a.player_id=c.player_id and c.event_date = ADDDATE(a.event_date, 1)
# where a.event_date = (select min(event_date) as event_date from activity as b
#     where b.player_id = a.player_id)

SELECT
    ROUND((COUNT(*) / (select COUNT(distinct(player_id)) from activity)), 2) as fraction
FROM
    activity AS a
WHERE
    (a.player_id, DATE_SUB(a.event_date, INTERVAL 1 DAY)) 
    IN (SELECT player_id , MIN(event_date) FROM activity group by player_id);
