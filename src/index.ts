import express, { Request, Response } from "express";
import { fetchSlack } from "./fetchSlack";

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.post("/form", async function (req: Request, res: Response) {
  let msg: string = `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`;
  try {
    await fetchSlack(msg);
  } catch (e) {
    return res.status(500).send("An error occured");
  }
  return res.status(200).send("Success!");
});

app.listen(Number(process.env.PORT) || 3000, "0.0.0.0", () =>
  console.log("Server running")
);
