import { Request, Response } from "express";
import app from "./app";
import { Pool } from "pg";


const port = 5000;

const pool =new Pool(


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    massage: "this is root rout toukir",
    path: req.path,
  });
});


app.post("/user",(req:Request,res:Response)=>{
     const body=req.body;
     console.log(body);

     res.status(200).json(body);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
