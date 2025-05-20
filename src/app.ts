import express from "express";
import cors from "cors";
import recommendRouter from "./routes/recommend";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/recommend", recommendRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
