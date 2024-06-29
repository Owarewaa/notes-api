import { Router } from "express";
import { addNotes, deleteNotesById, getNotes, getNotesById, updateNotesById } from "../controllers/notes_controllers.js";

const notesRouter = Router();

notesRouter.post('/notes', addNotes);
notesRouter.get('/notes', getNotes);
notesRouter.get('/notes/:id', getNotesById);
notesRouter.patch('/notes/:id', updateNotesById);
notesRouter.delete('/notes/:id', deleteNotesById);









export default notesRouter;