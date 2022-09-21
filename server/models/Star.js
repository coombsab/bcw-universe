import { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema({
  name: { type: String, required: true, maxlength: 200 },
  description: { type: String, default: "", maxlength: 500 },
  type: { type: String, enum: ["red dwarf", "yellow", "blue"], required: true },

  // RELATIONSHIPS
  galaxyId: { type: ObjectId, ref: "Galaxy", required: true },
},
{
  timestamps: true, toJSON: { virtuals: true }
})

StarSchema.virtual("galaxyId", {
  localField: "galaxyId",
  foreignField: "_id",
  justOne: true,
  ref: "Galaxy"
})