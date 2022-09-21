import { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxlength: 200 },
  description: { type: String, default: "", maxlength: 500 },
},
{
  timestamps: true, toJSON: { virtuals: true }
})