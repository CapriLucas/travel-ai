import { Request, Response } from "express";
import { buscarDestinos } from "../services/retrievalService";
import { generarRecomendacion } from "../services/openaiService";

export const handleRecommendation = async (req: Request, res: Response) => {
  const { mensaje } = req.body;
  if (!mensaje) {
    res.status(400).json({ error: "Falta 'mensaje' en el body." });
    return;
  }

  const resultados = await buscarDestinos(mensaje);
  const textos = resultados.map((doc) => doc.pageContent);

  const respuesta = await generarRecomendacion(mensaje, textos);

  res.json({ respuesta });
  return;
};
