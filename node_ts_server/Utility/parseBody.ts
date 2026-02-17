// utils/parseBody.ts
import { IncomingMessage } from "node:http";

const parseBody = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
};

export default parseBody;
