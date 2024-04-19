import { Schema, model, Types } from "mongoose";
import shortId from 'shortid';


const linkSchema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  title: { type: String, required: true },
  shortCode: { type: String, required: true, default: shortId.generate },
  originalUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 },
});

export const linkModel = model("Link", linkSchema, "links");
