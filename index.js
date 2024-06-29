import express from "express";
import notesRouter from "./routes/notes.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

const app = express();
app.use(express.json());

dbConnection();

app.use(notesRouter)

app.listen(7000, () => {
    console.log('App is listening on port 7000')
})