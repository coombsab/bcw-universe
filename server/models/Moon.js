import { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({
  name: { type: String, required: true, maxlength: 200 },
  description: { type: String, default: "", maxlength: 500 },
  isHabitable: { type: Boolean, default: false, required: true },

  // RELATIONSHIPS
  planetId: { type: ObjectId, ref: "Planet", required: true },
},
{
  timestamps: true, toJSON: { virtuals: true }
})

MoonSchema.virtual("planetId", {
  localField: "planetId",
  foreignField: "_id",
  justOne: true,
  ref: "Planet"
})