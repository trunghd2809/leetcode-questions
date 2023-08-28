# Write your MySQL query statement below

select teacher_id, COUNT(distinct subject_id) as cnt
from teacher
group by teacher_id