import { linkModel } from "../models/link.model.js";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

export const newLink = async (req, res, next) => {
  try {
    // Add link to database
    const { originalUrl, title } = req.body;
    const shortCode = uid.rnd();
    const createLink = await linkModel.create({
      originalUrl,
      title,
      shortCode,
      userId: req.session.user.id,
    });
    res.status(201).json({ message: "URL shortened successfully", createLink });
  } catch (error) {
    next(error);
  }
};



export const getAllLinks = async (req, res, next) => {
  try {
    // get all links from the database
    const allLinks = await linkModel.find({ userId: req.session.user.id });

    // map the links to the desired format
    const formattedLinks = allLinks.map((link) => {
      return {
        _id: link._id,
        userId: link.userId,
        title: link.title,
        shortCode: link.shortCode,
        originalUrl: link.originalUrl,
        clicks: link.clicks,
        shortLink: `${req.protocol}://${req.headers.host}/links/${link.shortCode}`,
      };
    });

    // return the formatted links as JSON response
    res.status(200).json(formattedLinks);
  } catch (error) {
    // handle errors
    next(error);
  }
};

export const openLink = async (req, res, next) => {
  try {
    const { shortcode } = req.params;
    const link = await linkModel.findOne({ shortCode: shortcode });

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
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
    const updatedLink = await linkModel.findOneAndUpdate(
      { _id: id, userId: req.session.user.id },
      req.body,
      {
        new: true,
      }
    );

    if (!updatedLink) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.status(200).json(updatedLink);
  } catch (error) {
    next(error);
  }
};

export const deleteLink = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedLink = await linkModel.findOneAndDelete({
      _id: id,
      userId: req.session.user.id,
    });

    if (!deletedLink) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    next(error);
  }
};
