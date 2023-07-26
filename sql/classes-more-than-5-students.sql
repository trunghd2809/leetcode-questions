select class
from courses
group by class
having COUNT(*) >= 5