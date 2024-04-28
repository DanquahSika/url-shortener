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
    // return the created link as JSON response
    // res.send(createLink.json())
    res.status(201).json({
      message: "URL shortened successfully",
      link: {
        _id: createLink._id,
        userId: createLink.userId,
        title: createLink.title,
        shortCode: createLink.shortCode,
        originalUrl: createLink.originalUrl,
        clicks: createLink.clicks,
        createdAt: createLink.createdAt,
        updatedAt: createLink.updatedAt,
        shortLink: `${req.protocol}://${req.headers.host}/api/links/${createLink.shortCode}`,
      },
    });
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
        createdAt: link.createdAt,
        updatedAt: link.updatedAt,
        shortLink: `${req.protocol}://${req.headers.host}/api/links/${link.shortCode}`,
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
    console.log(req.params);
    const { shortcode } = req.params;
    const link = await linkModel.findOne({ shortCode: shortcode });

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    console.log(link);
    // Increase click count
    link.clicks++;
    await link.save();

    // Redirect to the original URL
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.redirect(link.originalUrl);
    // res.status(200).json({ message: "shortened URL", link });
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
