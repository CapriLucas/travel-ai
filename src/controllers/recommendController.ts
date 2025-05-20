import { Request, Response } from "express";

export const handleRecommendation = (req: Request, res: Response) => {
  const userInput = req.body;

  // 👇 Lógica temporal del MVP
  console.log("Consulta recibida:", userInput);
  res.json({
    message: "Recomendación recibida correctamente (falta lógica real)",
    destinoSugerido: "Bocas del Toro",
  });
  res.status(200);
  return;
};
