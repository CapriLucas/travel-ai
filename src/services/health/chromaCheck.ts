import { chromaClient } from "../chromaService";

export async function checkChroma(): Promise<"ok" | "error"> {
  try {
    const result = await chromaClient.similaritySearch("test", 1);
    return result.length >= 0 ? "ok" : "error";
  } catch (error) {
    console.error("Error al verificar Chroma:", error);
    return "error";
  }
}
