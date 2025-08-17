import { Router } from "express";
import { getEpss, getEps, createEps, updateEps, deleteEps } from "../controllers/epss.js";

const router = Router();

router.get("/", getEpss);
router.get("/:id", getEps);
router.post("/", createEps);
router.put("/:id", updateEps);
router.delete("/:id", deleteEps);

export default router;
