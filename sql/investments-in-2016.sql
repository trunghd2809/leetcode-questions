select 
  *
from Insurance i1, Insurance i2
# Find rows that have same tiv_2015
where 
  i1.tiv_2015 = i2.tiv_2015
  AND i1.pid <> i2.pid 
  AND i1.pid NOT IN # filter out save lat, lo
    ( # find rows that have save lat, lon
      select DISTINCT a.pid 
      from insurance a, insurance b
      where  a.pid <> b.pid 
      AND a.lat = b.lat 
      AND b.lon = a.lon
    );