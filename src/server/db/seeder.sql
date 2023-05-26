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