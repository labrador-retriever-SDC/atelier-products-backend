CREATE INDEX products_index_0 IF NOT EXISTS ON products (id);
CREATE INDEX related_current_product_id_index ON related (current_product_id);
CREATE INDEX features_product_id ON features (product_id);
CREATE INDEX styles_productid ON styles (productid);
CREATE INDEX photos_styleid ON photos (styleid);
CREATE INDEX skus_styleid ON skyus (styleid);
