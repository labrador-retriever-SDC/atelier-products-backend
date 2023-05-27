/* eslint-disable no-console */
import dotenv from 'dotenv';
import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';
dotenv.config();
mongoose.connect("mongodb://127.0.0.1:27017/".concat(process.env.DB_NAME));
var productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: Number,
    created_at: Timestamp,
    updated_at: Timestamp,
    features: [{ feature: String, value: String }],
});
var styleSchema = new mongoose.Schema({
    style_id: Number,
    name: String,
    original_price: Number,
    sale_price: Number,
    default: Boolean,
    photos: [{ thumbnail_url: String, url: String }],
    skus: [{ sku_id: Number, quantity: Number, size: String }],
});
var Product = mongoose.model('Product', productSchema);
var Style = mongoose.model('Style', styleSchema);
export default { Product: Product, Style: Style };
//# sourceMappingURL=mongoDB.js.map