# 🔀 SQL Logical Operators

Logical operators in SQL are used to combine or modify conditions in `WHERE` clauses to filter data more precisely.

---

## 📋 Operator Reference

| Operator | Description |
|----------|-------------|
| `ALL` | Compares a single value to all values in a subquery result set. |
| `AND` | Combines multiple conditions; all must be `TRUE`. |
| `ANY` | Compares a value to any value in a subquery result set. |
| `BETWEEN` | Filters values within a given range (inclusive). |
| `EXISTS` | Checks whether a subquery returns any rows. |
| `IN` | Matches a value against a list of specified values. |
| `LIKE` | Searches for a pattern using wildcard characters (`%`, `_`). |
| `NOT` | Negates a condition (e.g., `NOT IN`, `NOT EXISTS`, `NOT BETWEEN`). |
| `OR` | Combines multiple conditions; at least one must be `TRUE`. |
| `IS NULL` | Checks whether a value is `NULL`. |
| `UNIQUE` | Verifies that all values in a column are distinct (no duplicates). |

---

## 💡 Examples

### `AND` / `OR`
```sql
SELECT * FROM Users
WHERE age > 18 AND country = 'Italy';

SELECT * FROM Users
WHERE country = 'Italy' OR country = 'Spain';
```

### `BETWEEN`
```sql
SELECT * FROM Products
WHERE price BETWEEN 10 AND 50;
```

### `IN`
```sql
SELECT * FROM Users
WHERE country IN ('Italy', 'Spain', 'France');
```

### `LIKE`
```sql
-- Names starting with 'M'
SELECT * FROM Users
WHERE username LIKE 'M%';
```

### `IS NULL` / `NOT`
```sql
SELECT * FROM Users
WHERE email IS NULL;

SELECT * FROM Users
WHERE country NOT IN ('Germany', 'UK');
```

### `EXISTS`
```sql
SELECT * FROM Users u
WHERE EXISTS (
    SELECT 1 FROM Orders o
    WHERE o.user_id = u.user_id
);
```