import { OpenAIEmbeddings } from "@langchain/openai";

export async function checkOpenAI(): Promise<"ok" | "error"> {
  try {
    const embedder = new OpenAIEmbeddings();
    await embedder.embedQuery("ping");
    return "ok";
  } catch (error) {
    console.error("Error al verificar OpenAI:", error);
    return "error";
  }
}
