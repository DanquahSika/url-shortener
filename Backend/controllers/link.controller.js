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
    try {
        const { shortcode } = req.params; 
        const link = await linkModel.findOne({ shortCode: shortcode });

        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        }

        // Increase click count
        link.clicks++;
        await link.save();

        // Redirect to the original URL
        res.redirect(link.originalUrl);
    } catch (error) {
        next(error);
    }
};


export const updateLink = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedLink = await linkModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedLink) {
            return res.status(404).json({ message: 'Link not found' });
        }

        res.status(200).json(updatedLink);
    } catch (error) {
        next(error);
    }
};

export const deleteLink = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedLink = await linkModel.findByIdAndDelete(id);

        if (!deletedLink) {
            return res.status(404).json({ message: 'Link not found' });
        }

        res.status(200).json({ message: 'Link deleted successfully' });
    } catch (error) {
        next(error);
    }
};


