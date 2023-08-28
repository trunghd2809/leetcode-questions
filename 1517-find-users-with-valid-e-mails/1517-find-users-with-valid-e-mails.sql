# Write your MySQL query statement below
  
SELECT user_id, name, mail FROM Users 
WHERE mail REGEXP '^[a-zA-Z]+[a-zA-Z-._0-9]*@leetcode[.]com$'