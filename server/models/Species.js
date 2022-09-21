import { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema({
  name: { type: String, required: true, maxlength: 200 },
  description: { type: String, default: "", maxlength: 500 },
  isHabitable: { type: Boolean, default: false, required: true },

  // RELATIONSHIPS
  // TODO how to make at least one of these required?
  planetId: { type: ObjectId, ref: "Planet" },
  moonId: { type: ObjectId, ref: "Moon" }
},
{
  timestamps: true, toJSON: { virtuals: true }
})

SpeciesSchema.virtual("planetId", {
  localField: "planetId",
  foreignField: "_id",
  justOne: true,
  ref: "Planet"
})

SpeciesSchema.virtual("moonId", {
  localField: "moonId",
  foreignField: "_id",
  justOne: true,
  ref: "Moon"
})