WITH a as (
  select 
    m.user_id, 
    count(m.user_id) count, 
    users.name as results
  from MovieRating m
  left join users on users.user_id = m.user_id  
  group by m.user_id
  order by count DESC, users.name
  limit 1
),
b as (
  select 
    m.movie_id, 
    AVG(rating) as rating, 
    title as results
  from MovieRating m
  left join movies on movies.movie_id = m.movie_id  
  where created_at between '2020-02-01' and '2020-02-29'
  group by m.movie_id
  order by rating DESC, movies.title
  limit 1
)
select results from a
UNION ALL
select results from b