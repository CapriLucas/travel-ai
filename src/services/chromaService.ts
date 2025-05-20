import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenAIEmbeddings } from "@langchain/openai";
import * as dotenv from "dotenv";

dotenv.config();

const CHROMA_URL = process.env.CHROMA_URL || "http://localhost:8000";

const embeddings = new OpenAIEmbeddings();

export const chromaClient = new Chroma(embeddings, {
  collectionName: "destinos",
  url: CHROMA_URL,
  collectionMetadata: {
    "hnsw:space": "cosine",
  },
});
