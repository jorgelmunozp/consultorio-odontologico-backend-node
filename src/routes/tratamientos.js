import { Router } from "express";
import { getTratamientos, getTratamiento, createTratamiento, updateTratamiento, deleteTratamiento } from "../controllers/tratamientos.js";

const router = Router();

router.get("/", getTratamientos);
router.get("/:id", getTratamiento);
router.post("/", createTratamiento);
router.put("/:id", updateTratamiento);
router.delete("/:id", deleteTratamiento);

export default router;
