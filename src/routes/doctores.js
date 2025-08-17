import { Router } from "express";
import { getDoctores, getDoctor, createDoctor, updateDoctor, deleteDoctor } from "../controllers/doctores.js";

const router = Router();

router.get("/", getDoctores);
router.get("/:id", getDoctor);
router.post("/", createDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
