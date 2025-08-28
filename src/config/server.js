import express from "express";
import cors from "cors";
import routes from "../routes.js";

export const server = () => {
    const db = process.env.DB;

    const app = express();
    app.use(cors());
    app.use(express.json());

    // Prefijo global de la API
    app.use("/api/"+db+"/", routes);

    app.get("/", (req, res) => {
        res.send("🚀 API Consultorio funcionando!");
    });

    const HOST = process.env.DB_HOST || "localhost";
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
    });
}

export default server;