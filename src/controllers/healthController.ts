import { Request, Response } from "express";
import { checkOpenAI } from "../services/health/openaiCheck";
import { checkChroma } from "../services/health/chromaCheck";

export const handleHealthCheck = async (req: Request, res: Response) => {
  const [openaiStatus, chromaStatus] = await Promise.all([
    checkOpenAI(),
    checkChroma(),
  ]);

  const status =
    openaiStatus === "ok" && chromaStatus === "ok" ? "ok" : "degraded";

  res.status(status === "ok" ? 200 : 503).json({
    status,
    services: {
      openai: openaiStatus,
      chroma: chromaStatus,
    },
  });
};
