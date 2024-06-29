import { request } from "express";
import { notesModel } from "../models/notes_model.js";


// Function to add data to a database
export const addNotes = async (req,res,next) => {
    try {
        console.log('request', req.body);
        const addData = await notesModel.create(req.body);
        res.status(200).json(addData);
    } catch (error) {
        next(error);
    }
}

// Function to get all data from a database
export const getNotes = async (req,res,next) => {
    try {
        console.log('request', req.body);
        const getData = await notesModel.find();
        res.status(201).json(getData);
    } catch (error) {
        next(error);
    }
        
    }


    // Function to display a particular/single statement from a database
    export const getNotesById = async (req,res,next) => {
        try {
            console.log('request', req.body);
            const getDataById = await notesModel.findById(req.params.id);
            res.status(200).json(getDataById);
        } catch (error) {
            next(error);
        }
    }


    // Function to update a particular statement from a database
    export const updateNotesById = async (req, res, next) => {
        try {
            const changeContent = req.body.content;
            console.log('request', changeContent);
            const updateDataById = await notesModel.findByIdAndUpdate(req.params.id, { content: changeContent }, { new: true });
            res.status(200).json(updateDataById);
        } catch (error) {
            next(error);
        }
    }


    //  Function to delete a whole object statement from a database
    export const deleteNotesById = async (req, res, next) => {
        try {
            console.log('request', req.body);
            const deleteDataById = await notesModel.findByIdAndDelete(req.params.id);
            res.status(200).json('Notes deleted succesffully');
        } catch (error) {
            next(error);
        }
    }

