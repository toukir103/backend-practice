import { IncomingMessage, ServerResponse } from "node:http";
import { productController } from "../controller/products.controller";

export const productRoute = (req: IncomingMessage, res: ServerResponse) => {
  //   console.log(req.url);
  //   console.log(req.method);
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Eita root url" }));
  } else if (url?.startsWith("/products")) {
    productController(req, res);
  } else {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "bhai eikhane kono kicu nai" }));
  }
};
