CREATE TABLE example (
    id serial PRIMARY KEY,
    name VARCHAR (100) NOT NULL
);

INSERT INTO example (name) VALUES ('John Doe');
INSERT INTO example (name) VALUES ('Adam Apple');