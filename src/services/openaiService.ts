import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
  modelName: "gpt-4",
});

export async function generarRecomendacion(
  userPrompt: string,
  destinosRelevantes: string[]
) {
  const sistema = new SystemMessage(`
Sos un asistente experto en viajes para personas en Argentina.
Dado el siguiente perfil y preferencia del usuario, recomendá uno o dos destinos de la lista.
No inventes destinos fuera de los recuperados. Justificá tu recomendación.
`);

  const user = new HumanMessage(`
Consulta del usuario: ${userPrompt}

Destinos disponibles:
${destinosRelevantes.map((d, i) => `(${i + 1}) ${d}`).join("\n")}
`);

  const res = await model.invoke([sistema, user]);
  return res.text;
}
