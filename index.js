// import express from "express";

// // Importar rutas
// import pacientesRoutes from "./routes/pacientes.js";
// import doctoresRoutes from "./routes/doctores.js";
// import citasRoutes from "./routes/citas.js";
// import consultoriosRoutes from "./routes/consultorios.js";
// import tratamientosRoutes from "./routes/tratamientos.js";
// import especialidadesRoutes from "./routes/especialidades.js";
// import generosRoutes from "./routes/generos.js";
// import epssRoutes from "./routes/epss.js";

// const app = express();
// app.use(express.json());

// // Rutas
// app.use("/api/pacientes", pacientesRoutes);
// app.use("/api/doctores", doctoresRoutes);
// app.use("/api/citas", citasRoutes);
// app.use("/api/consultorios", consultoriosRoutes);
// app.use("/api/tratamientos", tratamientosRoutes);
// app.use("/api/especialidades", especialidadesRoutes);
// app.use("/api/generos", generosRoutes);
// app.use("/api/epss", epssRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));




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
