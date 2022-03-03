import express from "express";
import { getProductCatalog } from "../services/expressService";

const app = express();
app.use(express.json());

app.get("/catalog", getProductCatalog);

app.listen(3333, () => {
  console.log("Started!");
});
