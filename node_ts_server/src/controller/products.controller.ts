export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url || "";
  const urlParts = url.split("/");
  const productId = urlParts[2];
  const method = req.method;

  // GET all products
  if (method === "GET" && (url === "/products" || url === "/products/")) {
    const products: Product[] = readProduct();
    if (!Array.isArray(products))
      return sendResponse(res, 500, false, "Products data is invalid");

    return sendResponse(res, 200, true, "All products", products);
  }

  // GET single product by ID
  else if (method === "GET" && productId) {
    const products: Product[] = readProduct();
    if (!Array.isArray(products))
      return sendResponse(res, 500, false, "Products data is invalid");

    const id = Number(productId);
    if (isNaN(id)) return sendResponse(res, 400, false, "Invalid product ID");

    const product = products.find((p) => p.id === id);
    if (!product) return sendResponse(res, 404, false, "Product not found");

    return sendResponse(res, 200, true, "Product found", product);
  }

  // POST /products
  else if (method === "POST" && url === "/products") {
    try {
      const body = await parseBody(req);
      const error = validateProduct(body);
      if (error) return sendResponse(res, 400, false, error);

      const products: Product[] = readProduct();
      const newProduct: Product = {
        id: generateId(products),
        name: body.name,
        price: body.price,
      };

      products.push(newProduct);
      writeProduct(products);

      return sendResponse(res, 201, true, "Product created", newProduct);
    } catch {
      return sendResponse(res, 400, false, "Invalid JSON body");
    }
  }

  // Route not found
  else {
    return sendResponse(res, 404, false, "Route not found");
  }
};
