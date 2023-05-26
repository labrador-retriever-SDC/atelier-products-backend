-- DROP DATABASE IF EXISTS products;
CREATE DATABASE products;


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

