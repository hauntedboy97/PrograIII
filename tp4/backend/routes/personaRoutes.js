import express from "express";
import { getPersonas } from "../controllers/personaController.js";

const router = express.Router();

router.get("/personas", getPersonas);

export default router;
