# 📊 SQL Language Commands: DDL, DML, and DQL

In SQL (Structured Query Language), commands are categorized based on their specific functionality. Understanding the difference between **DDL**, **DML**, and **DQL** is essential for managing both database schemas and the data within them.

---

## 🛠️ 1. DDL (Data Definition Language)
**DDL** is used to define, modify, or destroy the **structure** (schema) of the database. These commands affect the containers (tables, indexes, databases) rather than the individual rows.

* **`CREATE`**: To create a new database, table, or index.
* **`ALTER`**: To modify the structure of an existing object (e.g., adding a column).
* **`DROP`**: To permanently delete an object and all its data.
* **`TRUNCATE`**: To remove all records from a table while keeping the structure intact.

**Example:**
```sql
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    created_at TIMESTAMP
);
```

---

## ✏️ 2. DML (Data Manipulation Language)
**DML** is used to manipulate the data stored within the tables. You use these commands when you need to add, change, or remove specific records.

* **`INSERT`**: To add new rows into a table.
* **`UPDATE`**: To modify existing data within a table.
* **`DELETE`**: To remove specific rows from a table.

**Example:**
```sql
INSERT INTO Users (user_id, username, created_at) 
VALUES (1, 'johndoe', CURRENT_TIMESTAMP);

UPDATE Users 
SET username = 'john_doe_updated' 
WHERE user_id = 1;
```

---

## 🔍 3. DQL (Data Query Language)
**DQL** is the component of SQL used to retrieve data. While often grouped with DML, its sole purpose is data selection and reporting.

* **`SELECT`**: To fetch specific data from one or more tables.

**Example:**
```sql
SELECT username 
FROM Users 
WHERE user_id = 1;
```