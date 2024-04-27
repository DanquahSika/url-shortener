import { Schema, model, Types } from "mongoose";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({ length: 7 });

const linkSchema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  title: { type: String, required: true },
  shortCode: { type: String, required: true, default: uid.rnd() },
  originalUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 },
  createdAt: {type: String, default: Date.now()},
  updatedAt: {type: String, default: Date.now()},
});

linkSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const linkModel = model("Link", linkSchema, "links");
