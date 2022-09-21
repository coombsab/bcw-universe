import { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxlength: 200 },
  description: { type: String, default: "", maxlength: 500 },
  isHabitable: { type: Boolean, default: false, required: true },

  // RELATIONSHIPS
  starId: { type: ObjectId, ref: "Star", required: true },
},
{
  timestamps: true, toJSON: { virtuals: true }
})

PlanetSchema.virtual("starId", {
  localField: "starId",
  foreignField: "_id",
  justOne: true,
  ref: "Star"
})