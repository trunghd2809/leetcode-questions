select distinct a.num as ConsecutiveNums
from logs a
inner join logs b on b.id=a.id + 1 and b.num = a.num
inner join logs c on c.id=a.id + 2 and c.num= a.num