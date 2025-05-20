import { OpenAIEmbeddings } from "@langchain/openai";
import * as dotenv from "dotenv";
dotenv.config();

export const embedder = new OpenAIEmbeddings({
  modelName: "text-embedding-3-small",
  openAIApiKey: process.env.OPENAI_API_KEY,
});
