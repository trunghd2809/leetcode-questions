# Write your MySQL query statement below

SELECT
  categories.category,
  COALESCE(accounts_count, 0) AS accounts_count
FROM
  (
    SELECT 'Low Salary' AS category
    UNION
    SELECT 'Average Salary' AS category
    UNION
    SELECT 'High Salary' AS category
  ) categories
LEFT JOIN (
  SELECT
    CASE
      WHEN income < 20000 THEN 'Low Salary'
      WHEN income BETWEEN 20000 AND 50000 THEN 'Average Salary'
      ELSE 'High Salary'
    END AS category,
    COUNT(*) AS accounts_count
  FROM accounts
  GROUP BY category
) account_counts ON categories.category = account_counts.category;
