import { Schema, model, Types } from "mongoose";

const linkSchema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  title: { type: String, required: true },
  shortCode: { type: String, required: true },
  originalUrl: { type: String, required: true },
  clicks: { type: Number },
});

export const linkModel = model("Link", linkSchema, "links");
