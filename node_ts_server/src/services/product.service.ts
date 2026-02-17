import fs from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "./src/database/database.json");

export function readProduct() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");

    const products = JSON.parse(data);
    return products;
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}

// Call the function
const products = readProduct();
