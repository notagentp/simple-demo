import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Express server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
