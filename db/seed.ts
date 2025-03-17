import { db, Stock } from "astro:db";
import { PRODUCTS } from "../src/utilities/stripe";

const values = Object.keys(PRODUCTS).map((key) => ({
  product_id: PRODUCTS[key].product_id,
  name: PRODUCTS[key].name,
  price_id: PRODUCTS[key].price_id,
  count: PRODUCTS[key].count,
  price: PRODUCTS[key].price,
  image: PRODUCTS[key].image,
  title: PRODUCTS[key].title,
  description1: PRODUCTS[key].description1,
  description2: PRODUCTS[key].description2,
}));

export default async function () {
  await db.insert(Stock).values(values);
}
