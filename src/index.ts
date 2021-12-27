import express from "express";
import { fetchSlack } from "./fetchSlack";

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.post("/form", async function (req, res) {
  const msg: string = `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`;
  try {
    await fetchSlack(msg);
  } catch (e) {
    return res.status(500).send("An error occured");
  }
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
