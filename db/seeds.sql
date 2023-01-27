USE employee_db;

INSERT INTO departments (department_name)
    VALUES
    ('Finance'),
    ('Engineering'),
    ('Legal'),
    ('Sales');

INSERT INTO roles (departments_id, job_title, salary)
    VALUES
    (1, 'Accountant', 70000),
    (1, 'Accounting Manager', 120000),
    (1, 'Software Engineer', 110000),
    (1, 'Head Engineer', 160000),
    (1, 'Lawyer', 150000),
    (1, 'Principle Attorney', 200000),
    (1, 'Salesperson', 60000),
    (1, 'Head of Sales', 100000);

INSERT INTO employees (manager_id, roles_id, first_name, last_name)
    VALUES
    (null, 1, 'Mike', 'Tyson'),
    (1, 2, 'Jane', 'Higgins'),
    (null, 3, 'Zac', 'Brown'),
    (7, 4, 'Johnny', 'Depp'),
    (null, 5, 'Mariah', 'Carey'),
    (3, 6, 'John', 'Deer'),
    (null, 7, 'Oliver', 'Queen'),
    (4, 8, 'Lebron', 'James');
