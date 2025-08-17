import { Router } from "express";
import { getGeneros, getGenero, createGenero, updateGenero, deleteGenero } from "../controllers/generos.js";

const router = Router();

router.get("/", getGeneros);
router.get("/:id", getGenero);
router.post("/", createGenero);
router.put("/:id", updateGenero);
router.delete("/:id", deleteGenero);

export default router;
