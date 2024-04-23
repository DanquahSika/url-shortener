import { linkModel } from "../models/link.model.js";
import ShortUniqueId from "short-unique-id";


export const newLink = async (req, res, next) => {
  try {
    // Add link to database
    const { longUrl, title } = req.body;
    const createLink = await linkModel.create({
      ...req.body,
      userId: req.session.user.id,
    });
    if (existingLink) {
      return res.status(400).json({ message: "URL already shortened" });
    }
    // const shortCode = generateShortCode();
    const shortLink = new Link({
      longUrl,
      title,
      shortCode,
      userId: req.session.user.id,
    });
    await shortLink.save();
    res.status(201).json({ message: "URL shortened successfully", shortLink });
    // return response
    res.status(201).json(createLink);
  } catch (error) {
    next(error);
  }
};

export const getAllLinks = async (req, res, next) => {
  try {
    // get all link from database
    const allLinks = await linkModel.find({ userId: req.session.user.id });
    res.json(
      links.map((link) => {
        return {
          _id: link._id,
          userId: link.userId,
          title: link.title,
          // description: link.description,
          shortCode: link.shortCode,
          longUrl: link.longUrl,
          clicks: link.clicks,
          shortLink: `${req.protocol}://${req.headers.host}/links/${link.shortCode}`,
        };
      })
    );
    // return response
    res.status(200).json(allLinks);
  } catch (error) {
    next(error);
    res.status(500).json({ message: "Internal server error" });

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
