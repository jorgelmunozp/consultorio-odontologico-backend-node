import express from "express";
import cors from "cors";
import routes from "./src/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Prefijo global de la API
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("🚀 API Consultorio funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
