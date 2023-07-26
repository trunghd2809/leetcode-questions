select machine_id, 
ROUND((sum(
  case 
    when activity_type = 'start' then -timestamp 
    when activity_type = 'end' then timestamp
  end
)/ (COUNT(machine_id)/2)), 3) as processing_time
from activity
group by machine_id