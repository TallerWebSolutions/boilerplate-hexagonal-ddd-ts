import express from "express";
import { getProductCatalog } from "./modules/sale/infra/left/restAdapter";

const app = express();
app.use(express.json());

app.get("/catalog", getProductCatalog);

app.listen(3333, () => {
  console.log("Started!");
});
