import { Document } from "langchain/document";
import destinos from "../../data/destinations.json";
import { chromaClient } from "./chromaService";

let initialized = false;

export async function loadDestinos(): Promise<void> {
  if (initialized) return;
  const docs = (destinos as any[]).map((dest) => {
    const content = `
${dest.Nombre}
${dest.Descripción}
Clima: ${dest.Clima}
Actividades: ${dest.Tags.join(", ")}
Precio: ${dest["Nivel de precio"]}
Temporada: ${dest["Temporadas y clima"]}
`.trim();

    return new Document({
      pageContent: content,
      metadata: { nombre: dest.Nombre },
    });
  });

  await chromaClient.addDocuments(docs);
  initialized = true;
}

export async function buscarDestinos(query: string, k = 3) {
  await loadDestinos(); // asegúrate de que estén cargados
  return chromaClient.similaritySearch(query, k);
}
