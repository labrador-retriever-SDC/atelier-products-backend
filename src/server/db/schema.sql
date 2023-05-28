-- DROP DATABASE IF EXISTS products;
CREATE DATABASE products;
\c products;

DROP TABLE IF EXISTS skus;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS related;


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
  feature varchar,
  value varchar,
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE styles (
  id int,
  productId int NOT NULL,
  name varchar(150) NOT NULL,
  sale_price varchar,
  original_price int NOT NULL,
  default_style int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (productId) REFERENCES products (id)
);

CREATE TABLE photos (
  id int,
  styleId int,
  url varchar,
  thumbnail_url varchar,
  PRIMARY KEY (id),
  FOREIGN KEY (styleId) REFERENCES styles (id)
);

CREATE TABLE skus (
  id int,
  styleId int,
  size varchar(25),
  quantity int,
  PRIMARY KEY (id),
  FOREIGN KEY (styleId) REFERENCES styles (id)
);

CREATE INDEX products_index_0 ON products (id);


COPY products (id, name, slogan, description, category, default_price)
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/server/csv_files/product.csv'
DELIMITER ','
CSV HEADER;

COPY related (id, current_product_id, related_product_id)
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/server/csv_files/related.csv'
DELIMITER ','
CSV HEADER;

COPY features (id, product_id, feature, value)
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/server/csv_files/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles (id, productId, name, sale_price, original_price, default_style)
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/server/csv_files/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/server/csv_files/photos.csv'
DELIMITER ','
CSV HEADER;

COPY skus
FROM '/Users/rodrigogramitto/Desktop/HR/projects/sdc/atelier-products-backend/src/server/csv_files/skus.csv'
DELIMITER ','
CSV HEADER;

/*  Execute this file from the command line by typing:
 *    psql -U (username) < schema.sql
 *  to create the database and the tables.*/