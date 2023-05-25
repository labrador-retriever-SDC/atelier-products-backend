CREATE DATABASE products;
\c products

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS related;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS skus;

CREATE TABLE products (
  id int PRIMARY KEY,
  name varchar(150) NOT NULL,
  slogan varchar(300) NOT NULL,
  description varchar(500) NOT NULL,
  category varchar(300) NOT NULL,
  default_price int NOT NULL
);

CREATE TABLE related (
  id int PRIMARY KEY,
  current_product_id int,
  related_product_id int
);

CREATE TABLE features (
  id int PRIMARY KEY,
  product_id int,
  feature varchar(300) NOT NULL,
  value varchar(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE styles (
  id int,
  product_id int NOT NULL,
  name varchar(150) NOT NULL,
  sale_price int,
  original_price int NOT NULL,
  default_style boolean,
  PRIMARY KEY (id, product_id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE photos (
  id int,
  styleId int,
  url varchar(200),
  thumbnail_url varchar(200),
  PRIMARY KEY (id, styleId),
  FOREIGN KEY (styleId) REFERENCES styles (id)
);

CREATE TABLE skus (
  id int,
  styleId int,
  size varchar(5),
  quantity int,
  PRIMARY KEY (id, styleId),
  FOREIGN KEY (styleId) REFERENCES styles (id)
);

CREATE INDEX products_index_0 ON products (id);

COPY products
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/DB/csv_files/product.csv'
DELIMITER ','
CSV HEADER;

COPY related
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/DB/csv_files/related.csv'
DELIMITER ','
CSV HEADER;

COPY features
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/DB/csv_files/related.csv'
DELIMITER ','
CSV HEADER;

COPY styles
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/DB/csv_files/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/DB/csv_files/photos.csv'
DELIMITER ','
CSV HEADER;

COPY skus
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/DB/csv_files/skus.csv'
DELIMITER ','
CSV HEADER;


/*  Execute this file from the command line by typing:
 *    psql -u root < server/schema.sql
 *  to create the database and the tables.*/