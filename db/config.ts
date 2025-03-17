import { defineDb, defineTable, column } from "astro:db";

const Stock = defineTable({
  columns: {
    product_id: column.text({ primaryKey: true }),
    name: column.text(),
    price_id: column.text(),
    count: column.number(),
    price: column.number(),
    image: column.text(),
    title: column.text(),
    description1: column.text(),
    description2: column.text(),
  },
});

export default defineDb({
  tables: { Stock },
});
