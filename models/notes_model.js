import { Schema, model } from "mongoose";


const notesSchema = new Schema({
    name: { type: String, unique: true, required: true },
    heading: { type: String, required: true },
    notesId: { type: String },
    content: { type: String, required: true },
    pinned: { type: Boolean, default: false }
}, {
    timestamps: true
}
);


export const notesModel = model ('notes', notesSchema)