import express from "express";
import cors from "cors";
import personaRoutes from "./routes/personaRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", personaRoutes);

app.listen(3000, () => {
});
