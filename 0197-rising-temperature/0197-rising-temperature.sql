# Write your MySQL query statement below
select w.id from weather w
inner join weather as w1 
    on ADDDATE(w.recordDate, -1) = w1.recordDate
    and w.temperature > w1.temperature