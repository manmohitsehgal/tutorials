DROP TABLE fruits;
DROP TABLE vegetables;

CREATE TABLE fruits
(
    id INTEGER
    AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
    (30) NOT NULL,
    type VARCHAR
    (30) NOT NULL,
    createdDate DATE,
    isTasty BOOLEAN,
    price decimal
    (10,2)
);

    CREATE TABLE vegetables
    (
        id INTEGER
        AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
        (30),
    type VARCHAR
        (30),
    createdDate DATE,
    isYummy BOOLEAN,
    price decimal
        (10,2)
);

        INSERT INTO fruits
            (name, type, createdDate, isTasty, price)
        VALUES
            ("Dragon Fruit", "Fire", NOW(), 1, 22.02),
            ("Jack Fruit", "Scalington", NOW(), 1, 16.99),
            ("Mango", "Tropical", NOW(), 1, 12.00),
            ("Avacado", "hipster", NOW(), 0, 10.99),
            ("Tomatoes", "controversial", NOW(), 0, 29.99),
            ("Grapes", "member berries", NOW(), 0, 99.00),
            ("Wine", "Drunk", NOW(), 0, 10.99);

        INSERT INTO vegetables
            (name, type, createdDate, isYummy, price)
        VALUES
            ("Eggplant", "Tasty", NOW(), 1, 22.02),
            ("Spinach", "Not Tasty", NOW(), 1, 16.99),
            ("Cucumber", "Ok", NOW(), 1, 12.00),
            (NUll, "Test", NOW(), 0, NULL),
            (NUll, "Yuck", NOW(), 0, 12.00),
            ("French Bean", NULL, NOW(), 0, 13.00),
            (NUll, NULL, NOW(), 0, 14.00),
            ("Green bean", NULL, NOW(), 0, 14.99),
            (NUll, NULL, NOW(), 0, 16.00),
            ("Turnip", "pickles", NOW(), 0, 29.99),
            ("Carrot", "multi color", NOW(), 0, 99.00),
            ("Wine", "Drunk", NOW(), 0, 10.99);



        -- JOIN OR INNER JOIN
        SELECT *
        FROM fruits;
        SELECT *
        FROM vegetables;


        -- SELECT * FROM <table_name_1> AS <table_name_alias>
        -- INNER JOIN <table_name_2> AS <table_name_alias>
        -- ON tatable_name_1.property = table_name_2.property

        SELECT *
        FROM fruits AS f
            INNER JOIN vegetables AS v
            ON f.id = v.id;

        SELECT *
        FROM fruits AS f
            JOIN vegetables AS v
            ON f.id = v.id;


        -- LEFT JOIN

        -- SELECT * FROM <left_table> AS <left_table_alias>
        -- LEFT JOIN <right_table> AS <right_table_alias>
        -- ON left_table_alias.property = right_table_alias.property

        SELECT *
        FROM vegetables AS v
            LEFT JOIN fruits AS f
            ON f.id = v.id;

        SELECT (" ");
        SELECT *
        FROM fruits AS f
            LEFT JOIN vegetables AS v
            ON f.id = v.id;

        -- RIGHT JOIN

        -- SELECT * FROM <right_table> AS <right_table_alias>
        -- RIGHT JOIN <left> AS <left>
        -- ON right_table_alias.property = left_table_alias.property

        SELECT *
        FROM vegetables AS v
            RIGHT JOIN fruits AS f
            ON v.id = f.id;

        SELECT *
        FROM fruits AS f
            RIGHT JOIN vegetables AS v
            ON f.id = v.id;