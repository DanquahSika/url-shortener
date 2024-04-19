import { linkModel } from "../models/link.model.js";


export const newLink = async (req, res, next) => {
    try {
        // Add link to database
        const createLink = await linkModel.create({...req.body})
        res.redirect('/')

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


export const openLink = async (req, res, next) => {
  // get link from database
  const getLink = await linkModel.find({...req.body})
  res.redirect('/')

}


export const updateLink = (req, res, next) => {


}


export const deleteLink = (req, res, next) => {


}

