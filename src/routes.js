import { Router } from "express";

// Importar routers individuales
import citasRouter from "./routes/citas.js";
import pacientesRouter from "./routes/pacientes.js";
import doctoresRouter from "./routes/doctores.js";
import consultoriosRouter from "./routes/consultorios.js";
import tratamientosRouter from "./routes/tratamientos.js";
import especialidadesRouter from "./routes/especialidades.js";
import generosRouter from "./routes/generos.js";
import epssRouter from "./routes/epss.js";

const router = Router();

// Mapear endpoints
router.use("/citas", citasRouter);
router.use("/pacientes", pacientesRouter);
router.use("/doctores", doctoresRouter);
router.use("/consultorios", consultoriosRouter);
router.use("/tratamientos", tratamientosRouter);
router.use("/especialidades", especialidadesRouter);
router.use("/generos", generosRouter);
router.use("/epss", epssRouter);

export default router;