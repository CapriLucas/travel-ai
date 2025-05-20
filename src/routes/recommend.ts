import express from "express";
import { handleRecommendation } from "../controllers/recommendController";

const router = express.Router();

router.post("/", handleRecommendation);

export default router;
