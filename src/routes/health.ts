import express from "express";
import { handleHealthCheck } from "../controllers/healthController";

const router = express.Router();

router.get("/", handleHealthCheck);

export default router;
