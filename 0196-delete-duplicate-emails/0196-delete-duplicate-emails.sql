# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
Delete pp From Person pp Join Person p
on pp.email = p.email
where pp.id > p.id;