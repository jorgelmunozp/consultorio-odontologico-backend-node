import { Router } from "express";
import { getConsultorios, getConsultorio, createConsultorio, updateConsultorio, deleteConsultorio } from "../controllers/consultorios.js";

const router = Router();

router.get("/", getConsultorios);
router.get("/:id", getConsultorio);
router.post("/", createConsultorio);
router.put("/:id", updateConsultorio);
router.delete("/:id", deleteConsultorio);

export default router;
