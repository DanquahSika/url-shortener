import { linkModel } from "../models/link.model.js";


export const newLink = async (req, res, next) => {
    try {
        // Add link to database
        const createLink = await linkModel.create({...req.body})

        // return response
        res.status(201).json(createLink);
    } catch (error) {
        next(error);
    }
};

export const getAllLinks = async (req, res, next) => {
    try {
        // get all link from database
        const allLinks = await linkModel.find()

        // return response
        res.status(200).json(allLinks);
    } catch (error) {
        next(error)
    }
};


export const openLink = (req, res, next) => {


}


export const updateLink = (req, res, next) => {


}


export const deleteLink = (req, res, next) => {


}

